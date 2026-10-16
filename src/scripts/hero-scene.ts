/**
 * Sparse field of wireframe hexagons drifting in depth, with gentle pointer parallax.
 * Echoes the Toptal hex and the pixel brand mark. No lights, no textures: one
 * instanced LineSegments draw call. Returns a dispose function.
 */
import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  LineSegments,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three';

const ACCENT = new Color('#4d8dff');
const FAINT = new Color('#6b7483');

export function mountHeroScene(canvas: HTMLCanvasElement, host: HTMLElement): () => void {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 14);

  const group = new Group();
  scene.add(group);

  // --- Hexagon outlines, instanced -------------------------------------------------
  const HEX_COUNT = isSmallScreen() ? 28 : 56;
  const hexGeo = new InstancedBufferGeometry();
  hexGeo.setAttribute('position', hexOutline(1));
  hexGeo.instanceCount = HEX_COUNT;

  const offsets = new Float32Array(HEX_COUNT * 3);
  const scales = new Float32Array(HEX_COUNT);
  const phases = new Float32Array(HEX_COUNT);
  for (let i = 0; i < HEX_COUNT; i++) {
    offsets[i * 3] = rand(-16, 16);
    offsets[i * 3 + 1] = rand(-7, 7);
    offsets[i * 3 + 2] = rand(-14, 2);
    scales[i] = rand(0.35, 1.6);
    phases[i] = rand(0, Math.PI * 2);
  }
  hexGeo.setAttribute('aOffset', new InstancedBufferAttribute(offsets, 3));
  hexGeo.setAttribute('aScale', new InstancedBufferAttribute(scales, 1));
  hexGeo.setAttribute('aPhase', new InstancedBufferAttribute(phases, 1));

  const hexMat = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uAccent: { value: ACCENT },
      uFaint: { value: FAINT },
    },
    vertexShader: /* glsl */ `
      attribute vec3 aOffset;
      attribute float aScale;
      attribute float aPhase;
      uniform float uTime;
      varying float vDepth;
      varying float vPulse;
      void main() {
        float t = uTime * 0.25 + aPhase;
        vec3 p = position * aScale;
        float c = cos(t * 0.3), s = sin(t * 0.3);
        p.xy = mat2(c, -s, s, c) * p.xy;
        vec3 world = aOffset + p;
        world.y += sin(t) * 0.35;
        world.x += cos(t * 0.7) * 0.2;
        vDepth = clamp((world.z + 14.0) / 16.0, 0.0, 1.0);
        vPulse = 0.5 + 0.5 * sin(t * 1.3);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(world, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uAccent;
      uniform vec3 uFaint;
      varying float vDepth;
      varying float vPulse;
      void main() {
        vec3 col = mix(uFaint, uAccent, vDepth * 0.8 + vPulse * 0.2);
        float alpha = mix(0.08, 0.55, vDepth) * (0.7 + 0.3 * vPulse);
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });
  const hexes = new LineSegments(hexGeo, hexMat);
  hexes.frustumCulled = false;
  group.add(hexes);

  // --- Dust points ------------------------------------------------------------------
  const DUST = isSmallScreen() ? 160 : 320;
  const dustPos = new Float32Array(DUST * 3);
  for (let i = 0; i < DUST; i++) {
    dustPos[i * 3] = rand(-18, 18);
    dustPos[i * 3 + 1] = rand(-8, 8);
    dustPos[i * 3 + 2] = rand(-16, 4);
  }
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new Float32BufferAttribute(dustPos, 3));
  const dustMat = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: { value: 0 }, uColor: { value: ACCENT }, uDpr: { value: renderer.getPixelRatio() } },
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform float uDpr;
      varying float vA;
      void main() {
        vec3 p = position;
        p.y += sin(uTime * 0.2 + position.x * 0.3) * 0.3;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (1.6 * uDpr) * (18.0 / -mv.z);
        vA = clamp((p.z + 16.0) / 20.0, 0.1, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      varying float vA;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        gl_FragColor = vec4(uColor, (1.0 - d * 2.0) * vA * 0.6);
      }
    `,
  });
  const dust = new Points(dustGeo, dustMat);
  dust.frustumCulled = false;
  group.add(dust);

  // --- Interaction and loop ---------------------------------------------------------
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  const onPointer = (e: PointerEvent) => {
    const r = host.getBoundingClientRect();
    target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
  };
  const onLeave = () => {
    target.x = 0;
    target.y = 0;
  };
  window.addEventListener('pointermove', onPointer, { passive: true });
  window.addEventListener('pointerleave', onLeave);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = host;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  let raf = 0;
  let running = true;
  let last = performance.now();
  let time = 0;

  const frame = (now: number) => {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    time += dt;

    current.x += (target.x - current.x) * 0.04;
    current.y += (target.y - current.y) * 0.04;
    group.rotation.y = current.x * 0.12;
    group.rotation.x = -current.y * 0.08;
    camera.position.x = current.x * 0.6;
    camera.position.y = -current.y * 0.4;
    camera.lookAt(0, 0, 0);

    hexMat.uniforms.uTime!.value = time;
    dustMat.uniforms.uTime!.value = time;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  };

  const start = () => {
    if (running && raf) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
    raf = 0;
  };

  const io = new IntersectionObserver(([e]) => (e?.isIntersecting ? start() : stop()), {
    threshold: 0,
  });
  io.observe(host);
  const onVis = () => (document.hidden ? stop() : start());
  document.addEventListener('visibilitychange', onVis);

  start();

  return () => {
    stop();
    io.disconnect();
    ro.disconnect();
    document.removeEventListener('visibilitychange', onVis);
    window.removeEventListener('pointermove', onPointer);
    window.removeEventListener('pointerleave', onLeave);
    hexGeo.dispose();
    hexMat.dispose();
    dustGeo.dispose();
    dustMat.dispose();
    renderer.dispose();
  };
}

/** Position attribute for a unit hexagon outline as line segments (12 vertices, 6 edges). */
function hexOutline(r: number): Float32BufferAttribute {
  const pts: number[] = [];
  for (let i = 0; i < 6; i++) {
    const a0 = (Math.PI / 3) * i + Math.PI / 6;
    const a1 = (Math.PI / 3) * (i + 1) + Math.PI / 6;
    pts.push(Math.cos(a0) * r, Math.sin(a0) * r, 0, Math.cos(a1) * r, Math.sin(a1) * r, 0);
  }
  return new Float32BufferAttribute(pts, 3);
}

function rand(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function isSmallScreen(): boolean {
  return window.matchMedia('(max-width: 640px)').matches;
}
