import { useEffect } from 'react';

// Native touch/keyboard scrolling stays intact; wheel easing uses a single RAF.
export function usePortfolioMotion(root, paused) {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let cleanup = () => {};
    const configure = () => {
      cleanup();
      const enabled = !paused && !media.matches;
      document.documentElement.dataset.motion = enabled ? 'on' : 'off';
      const reveals = root.current?.querySelectorAll('.reveal') ?? [];
      if (!enabled) {
        reveals.forEach(el => el.classList.add('is-visible'));
        return;
      }
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }), {
        threshold: 0.08
      });
      reveals.forEach(el => observer.observe(el));
      const scenes = root.current?.querySelectorAll('.cube-scene, .marquee, .hero-star') ?? [];
      const motionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        entry.target.classList.toggle('in-view', entry.isIntersecting);
      }), {
        rootMargin: '100px'
      });
      scenes.forEach(el => motionObserver.observe(el));
      let frame = 0;
      let target = window.scrollY;
      let previous = 0;
      const stop = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        target = window.scrollY;
      };
      const step = time => {
        const dt = previous ? Math.min(time - previous, 40) : 16.67;
        previous = time;
        target = Math.max(0, Math.min(target, document.documentElement.scrollHeight - window.innerHeight));
        const current = window.scrollY;
        const distance = target - current;
        if (Math.abs(distance) < 1.2) {
          window.scrollTo({
            top: target,
            behavior: 'instant'
          });
          frame = 0;
          return;
        }
        // A minimum pixel step prevents rounding from leaving a RAF loop alive.
        const movement = Math.sign(distance) * Math.min(Math.abs(distance), Math.max(1, Math.abs(distance) * (1 - Math.exp(-dt / 90))));
        window.scrollTo({
          top: current + movement,
          behavior: 'instant'
        });
        frame = requestAnimationFrame(step);
      };
      const wheel = event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY || event.defaultPrevented) return;
        for (let el = event.target; el instanceof Element && el !== document.body; el = el.parentElement) {
          if (el.matches('input, textarea, select, [contenteditable="true"]')) return;
          const style = getComputedStyle(el);
          if (/(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight) return;
          if (/(auto|scroll)/.test(style.overflowX) && el.scrollWidth > el.clientWidth) return;
        }
        if (!event.cancelable) return;
        const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
        // Small high-resolution trackpad deltas already have OS inertia.
        if (event.deltaMode === 0 && Math.abs(delta) < 45) {
          stop();
          return;
        }
        event.preventDefault();
        if (!frame) target = window.scrollY;
        if ((target - window.scrollY) * delta < 0) target = window.scrollY;
        target = Math.max(0, Math.min(target + delta, document.documentElement.scrollHeight - innerHeight));
        if (!frame) {
          previous = 0;
          frame = requestAnimationFrame(step);
        }
      };
      const onVisibility = () => {
        if (document.hidden) stop();
      };
      window.addEventListener('wheel', wheel, {
        passive: false
      });
      window.addEventListener('pointerdown', stop, {
        passive: true
      });
      window.addEventListener('touchstart', stop, {
        passive: true
      });
      window.addEventListener('keydown', stop);
      window.addEventListener('resize', stop);
      document.addEventListener('visibilitychange', onVisibility);
      cleanup = () => {
        stop();
        observer.disconnect();
        motionObserver.disconnect();
        window.removeEventListener('wheel', wheel);
        window.removeEventListener('pointerdown', stop);
        window.removeEventListener('touchstart', stop);
        window.removeEventListener('keydown', stop);
        window.removeEventListener('resize', stop);
        document.removeEventListener('visibilitychange', onVisibility);
      };
    };
    configure();
    media.addEventListener('change', configure);
    return () => {
      cleanup();
      media.removeEventListener('change', configure);
      delete document.documentElement.dataset.motion;
    };
  }, [root, paused]);
}
