/**
 * Cursor spotlight for `.key` buttons. One delegated listener tracks the pointer inside the
 * hovered key; a rAF loop eases the light toward it (a short trail, like the aurora) and
 * writes --key-x/--key-y, which only move the light's transform. The loop runs only while
 * a key is hovered. Fine pointers only.
 */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const EASE = 0.35;
  let active: HTMLElement | null = null;
  let raf = 0;
  const target = { x: 0, y: 0 };
  const pos = { x: 0, y: 0 };

  const write = (key: HTMLElement) => {
    key.style.setProperty('--key-x', `${pos.x.toFixed(1)}px`);
    key.style.setProperty('--key-y', `${pos.y.toFixed(1)}px`);
  };

  const tick = () => {
    raf = 0;
    if (!active) return;
    pos.x += (target.x - pos.x) * EASE;
    pos.y += (target.y - pos.y) * EASE;
    write(active);
    if (Math.abs(target.x - pos.x) > 0.3 || Math.abs(target.y - pos.y) > 0.3) {
      raf = requestAnimationFrame(tick);
    }
  };

  const aim = (key: HTMLElement, e: PointerEvent) => {
    const r = key.getBoundingClientRect();
    target.x = e.clientX - r.left;
    target.y = e.clientY - r.top;
    if (!raf) raf = requestAnimationFrame(tick);
  };

  document.addEventListener(
    'pointerover',
    (e) => {
      const key = (e.target as Element | null)?.closest<HTMLElement>('.key') ?? null;
      if (key === active) return;
      active = key;
      if (!key) return;
      // Start under the cursor, then follow.
      aim(key, e);
      pos.x = target.x;
      pos.y = target.y;
      write(key);
    },
    { passive: true },
  );

  document.addEventListener(
    'pointermove',
    (e) => {
      if (active) aim(active, e);
    },
    { passive: true },
  );
}
