/**
 * Fullscreen fragment-shader aurora: two drifting light bands on a near-black field,
 * pointer-reactive. No geometry beyond a screen quad. Returns a dispose function.
 */
import { Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, WebGLRenderer } from 'three';

export function mountHeroScene(canvas: HTMLCanvasElement, host: HTMLElement): () => void {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: 'low-power',
  });
  // The field is all soft gradients; below CSS resolution it looks the same and frees the GPU
  // (full DPR on a 4K screen was starving hover repaints).
  renderer.setPixelRatio(0.6);
  renderer.setClearColor(0x000000, 0);

  // Tightness for the hero to react to: 1 when the pointer is high (bands pulled into one),
  // 0 when it is low or at rest (spread). Only for real pointers; touch keeps the hero static.
  const stage = host.parentElement;
  const tracksPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (stage && tracksPointer) stage.setAttribute('data-aurora-live', '');
  let lastTight = -1;

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const material = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    toneMapped: false,
    uniforms: {
      uTime: { value: 0 },
      uRes: { value: [1, 1] },
      uPointer: { value: [0.5, 0.5] },
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
      uniform vec2 uRes;
      uniform vec2 uPointer;
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
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = p * 2.02 + 17.1;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv;
        float aspect = uRes.x / max(uRes.y, 1.0);
        vec2 p = vec2(uv.x * aspect, uv.y);
        p.x += (uPointer.x - 0.5) * 0.22;
        p.y += (0.5 - uPointer.y) * 0.14;

        float t = uTime * 0.07;
        float n1 = fbm(vec2(p.x * 1.15 + t, p.y * 0.55 - t * 0.35));
        float n2 = fbm(vec2(p.x * 0.75 - t * 0.6, p.y * 0.95 + t * 0.25));

        float y1 = 0.68 + (uPointer.y - 0.5) * 0.1;
        float y2 = 0.36 - (uPointer.y - 0.5) * 0.08;
        float bandA = exp(-pow((p.y - y1 - (n1 - 0.5) * 0.42) * 4.2, 2.0));
        float bandB = exp(-pow((p.y - y2 - (n2 - 0.5) * 0.5) * 3.4, 2.0));

        vec3 accent = vec3(0.42, 0.62, 1.0);
        vec3 cool = vec3(0.22, 0.48, 0.95);
        vec3 violet = vec3(0.55, 0.42, 1.0);

        vec3 col = accent * bandA + mix(cool, violet, n2) * bandB;
        col += accent * n1 * bandA * 0.35;

        float vignette = smoothstep(1.25, 0.15, length((uv - vec2(0.5, 0.45)) * vec2(1.05, 1.15)));
        // No extra edge fade: the vignette is symmetric, so both sides reach the edge alike.
        float alpha = clamp((bandA * 0.95 + bandB * 0.8) * vignette, 0.0, 0.9);

        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const mesh = new Mesh(new PlaneGeometry(2, 2), material);
  scene.add(mesh);

  const target = { x: 0.5, y: 0.5 };
  const current = { x: 0.5, y: 0.5 };
  const onPointer = (e: PointerEvent) => {
    const r = host.getBoundingClientRect();
    target.x = (e.clientX - r.left) / Math.max(r.width, 1);
    target.y = (e.clientY - r.top) / Math.max(r.height, 1);
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  const resize = () => {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    material.uniforms.uRes!.value = [w, h];
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
    material.uniforms.uTime!.value = time;
    const ptr = material.uniforms.uPointer!.value as number[];
    ptr[0] = current.x;
    ptr[1] = current.y;
    renderer.render(scene, camera);
    if (stage && tracksPointer) {
      const k = Math.min(Math.max((0.55 - current.y) / 0.35, 0), 1);
      const tight = k * k * (3 - 2 * k);
      if (Math.abs(tight - lastTight) > 0.004) {
        lastTight = tight;
        stage.style.setProperty('--aurora-tight', tight.toFixed(3));
      }
    }
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
    stage?.removeAttribute('data-aurora-live');
    stage?.style.removeProperty('--aurora-tight');
    mesh.geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}

/** Aurora painted into the headline and clipped to the glyphs by the caller. */
export function mountHeadlineAurora(canvas: HTMLCanvasElement, host: HTMLElement): () => void {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: 'low-power',
  });
  // Soft gradient copied into the glyphs as an image; low resolution is invisible there.
  renderer.setPixelRatio(0.5);
  renderer.setClearColor(0x070b16, 1);

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const material = new ShaderMaterial({
    depthWrite: false,
    toneMapped: false,
    uniforms: {
      uTime: { value: 0 },
      uRes: { value: [1, 1] },
      uPointer: { value: [0.5, 0.5] },
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
      uniform vec2 uRes;
      uniform vec2 uPointer;
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
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = p * 2.02 + 17.1;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv;
        float aspect = uRes.x / max(uRes.y, 1.0);
        vec2 p = vec2(uv.x * aspect, uv.y);
        p.x += (uPointer.x - 0.5) * 0.22;
        p.y += (0.5 - uPointer.y) * 0.14;

        float t = uTime * 0.07;
        float n1 = fbm(vec2(p.x * 1.15 + t, p.y * 0.55 - t * 0.35));
        float n2 = fbm(vec2(p.x * 0.75 - t * 0.6, p.y * 0.95 + t * 0.25));

        float y1 = 0.68 + (uPointer.y - 0.5) * 0.1;
        float y2 = 0.36 - (uPointer.y - 0.5) * 0.08;
        float bandA = exp(-pow((p.y - y1 - (n1 - 0.5) * 0.42) * 3.1, 2.0));
        float bandB = exp(-pow((p.y - y2 - (n2 - 0.5) * 0.5) * 2.5, 2.0));

        vec3 accent = vec3(0.45, 0.68, 1.0);
        vec3 cool = vec3(0.2, 0.45, 0.95);
        vec3 violet = vec3(0.58, 0.4, 1.0);
        // Lit base so the name never drops to near-black between bands (it sits on a dark scrim).
        vec3 col = vec3(0.24, 0.32, 0.72);
        col += accent * bandA;
        col += mix(cool, violet, n2) * bandB;
        col += accent * n1 * 0.18;

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  const mesh = new Mesh(new PlaneGeometry(2, 2), material);
  scene.add(mesh);

  const target = { x: 0.5, y: 0.5 };
  const current = { x: 0.5, y: 0.5 };
  const onPointer = (e: PointerEvent) => {
    const r = host.getBoundingClientRect();
    target.x = (e.clientX - r.left) / Math.max(r.width, 1);
    // The host is one line tall, so a pointer anywhere else would push the bands out of the glyphs.
    target.y = Math.min(Math.max((e.clientY - r.top) / Math.max(r.height, 1), -0.5), 1.5);
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  const resize = () => {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    material.uniforms.uRes!.value = [w, h];
  };
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  let raf = 0;
  let running = true;
  let last = performance.now();
  let time = 0;
  let revealed = false;
  let tick = 0;
  let encoding = false;
  let blobUrl = '';
  const text = host.querySelector<HTMLElement>('.hero-clip-text');

  const frame = (now: number) => {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    time += dt;
    current.x += (target.x - current.x) * 0.04;
    current.y += (target.y - current.y) * 0.04;
    // The bands drift slowly, so ~12 fps into the glyphs is plenty. Render and snapshot
    // together; toBlob encodes off the main thread, unlike the old per-frame toDataURL.
    tick += 1;
    if (text && !encoding && (tick === 1 || tick % 5 === 0)) {
      material.uniforms.uTime!.value = time;
      const ptr = material.uniforms.uPointer!.value as number[];
      ptr[0] = current.x;
      ptr[1] = current.y;
      renderer.render(scene, camera);
      encoding = true;
      canvas.toBlob(
        (blob) => {
          if (!blob || !running) {
            encoding = false;
            return;
          }
          const url = URL.createObjectURL(blob);
          // Decode before swapping: assigning an undecoded URL paints an empty frame (flicker).
          const img = new Image();
          img.src = url;
          img
            .decode()
            .then(() => {
              if (!running) return URL.revokeObjectURL(url);
              const prev = blobUrl;
              blobUrl = url;
              text.style.backgroundImage = `url(${url})`;
              if (prev) setTimeout(() => URL.revokeObjectURL(prev), 1000);
              reveal();
            })
            .catch(() => URL.revokeObjectURL(url))
            .finally(() => {
              encoding = false;
            });
        },
        'image/jpeg',
        0.85,
      );
    }
    raf = requestAnimationFrame(frame);
  };

  function reveal() {
    if (!text || revealed) return;
    revealed = true;
    text.style.color = 'transparent';
    text.style.webkitTextFillColor = 'transparent';
    text.style.backgroundRepeat = 'no-repeat';
    text.style.backgroundSize = '100% 100%';
    text.style.webkitBackgroundClip = 'text';
    text.style.backgroundClip = 'text';
    host.classList.add('is-live');
  }

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
    host.classList.remove('is-live');
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    mesh.geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
