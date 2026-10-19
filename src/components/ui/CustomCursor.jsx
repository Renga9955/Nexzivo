import { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor — Minimal, precise desktop cursor for NEXZIVO.
 * Design goals:
 * - Small neutral dot with a thin, low-contrast trailing ring.
 * - Restrained hover expansion on interactive elements.
 * - Fully hidden over text inputs and on touch / reduced-motion devices.
 * - No glow, no labels, no decorative trails.
 */
function detectInitialEnabled() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return !isTouch && !prefersReduced;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(detectInitialEnabled);
  const [visible, setVisible] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'project' | 'input'

  // Target coordinates (actual mouse pos)
  const mousePos = useRef({ x: -100, y: -100 });
  // Trailing ring coordinates (interpolated)
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // 1. Keep `enabled` in sync with OS pointer / motion preference changes.
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(pointer: coarse)');
    const handleChange = () => {
      setEnabled(!pointerQuery.matches && !motionQuery.matches);
    };
    motionQuery.addEventListener('change', handleChange);
    pointerQuery.addEventListener('change', handleChange);
    return () => {
      motionQuery.removeEventListener('change', handleChange);
      pointerQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // 2. Mouse tracking & animation loop with requestAnimationFrame
  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      setVisible(true);

      // Fast update for central dot directly via transform
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth Lerp animation loop for the trailing ring
    const render = () => {
      const ease = 0.18; // smooth trailing without sluggishness
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [enabled]);

  // 3. Delegated pointer-over listener — determines cursor state per hovered element.
  useEffect(() => {
    if (!enabled) return;

    const handlePointerOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const projectCard = target.closest('[data-cursor="project"]');
      if (projectCard) {
        setCursorState('project');
        return;
      }

      // Input / Text area / Contenteditable — hand the pointer back to the OS.
      const isInput =
        target.closest('input, textarea, select, [contenteditable="true"]') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
      if (isInput) {
        setCursorState('input');
        return;
      }

      // Clickable / Interactive check
      const isInteractive = target.closest(
        'button, a, [role="button"], [data-cursor="pointer"], input[type="submit"], input[type="button"], label[for], summary'
      );
      if (isInteractive) {
        setCursorState('hover');
        return;
      }

      setCursorState('default');
    };

    window.addEventListener('mouseover', handlePointerOver, { passive: true });
    return () => {
      window.removeEventListener('mouseover', handlePointerOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  // Minimal, neutral cursor states — no glow, no blur, no labels.
  let dotStyles = 'opacity-100 scale-100 bg-white';
  let ringStyles = 'w-8 h-8 border border-white/25 bg-transparent';
  let wrapperOpacity = visible ? 'opacity-100' : 'opacity-0';

  if (cursorState === 'hover') {
    dotStyles = 'opacity-0 scale-0';
    ringStyles = 'w-11 h-11 border border-white/45 bg-white/[0.04]';
  } else if (cursorState === 'project') {
    dotStyles = 'opacity-0 scale-0';
    ringStyles = 'w-12 h-12 border border-white/40 bg-white/[0.05]';
  } else if (cursorState === 'input') {
    // Hand control back to the native text caret — hide the custom cursor entirely.
    wrapperOpacity = 'opacity-0';
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300 ${wrapperOpacity}`}
      aria-hidden="true"
    >
      {/* Outer Tracking Ring — thin, neutral */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 flex items-center justify-center rounded-full will-change-transform transition-[width,height,background-color,border-color,opacity] duration-200 ease-out ${ringStyles}`}
      />

      {/* Central Precise Pointer Dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 h-1.5 w-1.5 rounded-full will-change-transform transition-[opacity,transform] duration-150 ease-out ${dotStyles}`}
      />
    </div>
  );
}
