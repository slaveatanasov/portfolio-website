/**
 * Entrance animations with Motion's vanilla API.
 * Elements marked [data-reveal] start hidden (see global.css, only when html.js and
 * motion is allowed) and fade/slide in when they enter the viewport. Siblings that
 * enter together are staggered.
 *
 * `animate` comes from motion/mini (WAAPI-only, ~2.5 kB) and `inView` from motion;
 * both are tree-shaken into a small chunk.
 */
import { animate } from 'motion/mini';
import { inView } from 'motion';

const STAGGER = 0.06;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduced) {
  document.documentElement.classList.remove('js');
} else {
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

  // Group by parent so tiles in the same grid stagger instead of popping individually.
  const groups = new Map<Element, HTMLElement[]>();
  for (const el of targets) {
    const key = el.parentElement ?? document.body;
    groups.set(key, [...(groups.get(key) ?? []), el]);
  }

  for (const [, els] of groups) {
    const pending = new Set(els);

    inView(
      els,
      (el) => {
        if (!pending.has(el as HTMLElement)) return;

        // Animate every still-pending sibling that is currently visible, in order.
        const batch = els.filter((e) => pending.has(e) && isNearViewport(e));
        batch.forEach((e, i) => {
          pending.delete(e);
          animate(
            e,
            { opacity: [0, 1], transform: ['translateY(14px)', 'translateY(0px)'] },
            { duration: 0.55, delay: i * STAGGER, ease: [0.22, 1, 0.36, 1] },
          );
        });
      },
      { amount: 0.15, margin: '0px 0px -8% 0px' },
    );
  }
}

function isNearViewport(el: Element): boolean {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * 1.1 && r.bottom > 0;
}
