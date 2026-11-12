import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;
let rafId: number | null = null;

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export type MotionTier = 'cinematic' | 'editorial' | 'studio' | 'archive' | 'story' | 'about';

export function getMotionTier(pathname: string): MotionTier {
  if (pathname === '/') return 'cinematic';
  if (pathname.startsWith('/equipment')) return 'studio';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/missions') || pathname.startsWith('/machines')) return 'editorial';
  if (pathname.startsWith('/archive') || pathname.startsWith('/references') || pathname.startsWith('/still-exploring')) return 'archive';
  return 'story';
}

interface InitLenisOptions {
  tier?: MotionTier;
}

export function initGlobalLenis(wrapper: HTMLElement, options: InitLenisOptions = {}): Lenis | null {
  // Always clean up previous instance first to guarantee singleton lifecycle
  destroyGlobalLenis();

  if (typeof window === 'undefined' || !wrapper) return null;

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    return null;
  }

  // Adjust scroll duration / inertia according to page motion tier
  // Homepage & Stories: cinematic (1.2s - 1.25s)
  // Equipment: light inertia (1.0s) so 3D interactions take precedence
  // Missions / About / Archive: natural editorial feel (1.1s)
  let duration = 1.1;
  if (options.tier === 'cinematic' || options.tier === 'story') {
    duration = 1.2;
  } else if (options.tier === 'studio') {
    duration = 1.0;
  }

  try {
    lenisInstance = new Lenis({
      wrapper,
      content: wrapper,
      eventsTarget: wrapper,
      duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false, // Preserves native touch scrolling and gestures on mobile devices
      touchMultiplier: 1,
      wheelMultiplier: 0.95,
      anchors: true,
      respectReducedMotion: true,
      prevent: (node: Element) => {
        // Prevent Lenis smooth scrolling inside interactive 3D canvases, modals, dropdowns, and nested scrollables
        if (!node) return false;
        if (node.hasAttribute?.('data-lenis-prevent')) return true;
        if (node.closest?.('[data-lenis-prevent]')) return true;
        if (node.tagName === 'CANVAS') return true;
        if (node.closest?.('.rover-canvas, .machine-canvas, .dropdown-panel, .nav-links.open, .signal-console')) return true;
        return false;
      },
    });

    const onRaf = (time: number) => {
      lenisInstance?.raf(time);
      rafId = requestAnimationFrame(onRaf);
    };
    rafId = requestAnimationFrame(onRaf);

    return lenisInstance;
  } catch (err) {
    console.warn('Lenis initialization skipped:', err);
    return null;
  }
}

export function destroyGlobalLenis() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (lenisInstance) {
    try {
      lenisInstance.destroy();
    } catch {
      // ignore
    }
    lenisInstance = null;
  }
}

export function scrollToAnchor(target: string | HTMLElement, offset = -140) {
  if (typeof window === 'undefined' || !target) return;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lenis = getLenis();

  const el = typeof target === 'string'
    ? document.querySelector<HTMLElement>(target.startsWith('#') ? target : `#${target}`)
    : target;

  if (!el) {
    console.warn('scrollToAnchor: target element not found:', target);
    return;
  }

  if (lenis && !isReduced) {
    try {
      lenis.scrollTo(el, {
        offset,
        duration: 0.95,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      return;
    } catch (err) {
      console.warn('Lenis scrollTo failed, using fallback:', err);
    }
  }

  // Fallback: direct container scroll or scrollIntoView
  const container = el.closest<HTMLElement>('.ls');
  if (container) {
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const targetScrollTop = container.scrollTop + (elRect.top - containerRect.top) + offset;
    container.scrollTo({
      top: Math.max(0, targetScrollTop),
      behavior: isReduced ? 'auto' : 'smooth'
    });
  } else {
    el.scrollIntoView({ behavior: isReduced ? 'auto' : 'smooth', block: 'start' });
  }
}

export function setupRevealObserver(root: HTMLElement, isReduced: boolean): () => void {
  const selectors = [
    '[data-reveal]',
    '.scroll-layer',
    '.archive-card',
    '.mission-card',
    '.story-book',
    '.active-record',
    '.editorial > figure',
    '.editorial > div',
    '.stat',
    '.chal',
    '.source-list',
    '.callout',
    '.directory-ways > a',
    '.ongoing-link',
    '.model-explorer',
  ].join(', ');

  const elements = Array.from(root.querySelectorAll<HTMLElement>(selectors));
  if (!elements.length) return () => {};

  if (isReduced) {
    elements.forEach(el => {
      el.classList.add('in', 'arrived');
    });
    return () => {};
  }

  // Calculate subtle stagger delay across sibling items in the same container or grid
  elements.forEach((el, idx) => {
    el.classList.add('reveal-item');
    const parent = el.parentElement;
    let localIndex = idx;
    if (parent) {
      const siblings = Array.from(parent.children);
      const pos = siblings.indexOf(el);
      if (pos >= 0) localIndex = pos;
    }
    const stagger = Math.min(localIndex % 4, 3) * 90;
    el.style.setProperty('--reveal-delay', `${stagger}ms`);
  });

  const rootRect = root.getBoundingClientRect();
  const viewportBottom = rootRect.top + root.clientHeight;

  // Immediately reveal elements that are already within or above the viewport on initial mount
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewportBottom - 20) {
      el.classList.add('in', 'arrived');
    }
  });

  const remaining = elements.filter(el => !el.classList.contains('arrived'));
  if (!remaining.length) return () => {};

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in', 'arrived');
        io.unobserve(entry.target);
      }
    });
  }, {
    root,
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
  });

  remaining.forEach(el => io.observe(el));
  return () => io.disconnect();
}
