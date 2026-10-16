/**
 * Mobile copy of the hero aurora (see hero-scene.ts for the desktop one). On a tall, narrow
 * screen the desktop field reads as a round blob: its noise is scaled by aspect and it fades
 * with a radial vignette. This version keeps the bands wide and horizontal (noise stretched
 * across the width, fade only at the top and bottom), runs at lower intensity, and drifts on
 * its own since touch has no hover pointer. Returns a dispose function.
 */
import { Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, WebGLRenderer } from 'three';

export function mountHeroSceneMobile(canvas: HTMLCanvasElement, host: HTMLElement): () => void {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: 'low-power',
  });
  // Soft gradients only; sub-CSS resolution looks the same and saves battery.
  renderer.setPixelRatio(0.5);
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const material = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    toneMapped: false,
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      precision highp float;
      uniform float uTime;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = p * 2.02 + 17.1;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv;
        // Noise runs across the width at a fixed scale (not aspect-scaled), so the bands
        // stretch edge to edge instead of curling into a blob on a tall screen.
        vec2 p = vec2(uv.x * 1.3, uv.y);

        float t = uTime * 0.06;
        float sway = sin(uTime * 0.18) * 0.03;
        float n1 = fbm(vec2(p.x * 1.1 + t, p.y * 0.6 - t * 0.3));
        float n2 = fbm(vec2(p.x * 0.8 - t * 0.5, p.y * 0.9 + t * 0.2));

        // Two thin, mostly flat bands: one behind the name, one lower behind the buttons.
        float bandA = exp(-pow((p.y - 0.64 - sway - (n1 - 0.5) * 0.16) * 7.0, 2.0));
        float bandB = exp(-pow((p.y - 0.3 + sway - (n2 - 0.5) * 0.2) * 6.0, 2.0));

        vec3 accent = vec3(0.42, 0.62, 1.0);
        vec3 cool = vec3(0.22, 0.48, 0.95);
        vec3 violet = vec3(0.55, 0.42, 1.0);
        // Broad faint wash between the bands so the middle (behind the intro) carries light
        // instead of dropping into a dark gap.
        float wash = exp(-pow((p.y - 0.47 - (n1 - 0.5) * 0.08) * 2.4, 2.0));

        vec3 col = accent * bandA + mix(cool, violet, n2) * bandB;
        col += accent * n1 * bandA * 0.3;
        col += mix(cool, accent, n1) * wash * 0.55;

        // Vertical fade only, so the bands reach both side edges.
        float fade = smoothstep(0.0, 0.2, uv.y) * smoothstep(1.0, 0.72, uv.y);
        float alpha = clamp((bandA * 0.6 + bandB * 0.45 + wash * 0.22) * fade, 0.0, 0.5);

        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const mesh = new Mesh(new PlaneGeometry(2, 2), material);
  scene.add(mesh);

  const resize = () => {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
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
    material.uniforms.uTime!.value = time;
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
    mesh.geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
