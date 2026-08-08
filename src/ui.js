import React from 'react';
import { useReveal } from './hooks';

/**
 * Wraps children in a div that fades/slides up the first time it enters
 * the viewport. `delay` (ms) staggers items in a grid.
 */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/**
 * Standard section heading: small eyebrow label, big title, optional
 * supporting line. Reveals on scroll.
 */
export function SectionHead({ eyebrow, title, sub, align = 'center', tone = 'dark' }) {
  return (
    <Reveal className={`sechead sechead--${align} sechead--${tone}`}>
      {eyebrow && (
        <span className="sechead__eyebrow">
          <span className="sechead__eyebrow-dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="sechead__title">{title}</h2>
      {sub && <p className="sechead__sub">{sub}</p>}
    </Reveal>
  );
}

/* ---- Inline SVG icon set (stroke-based, inherits currentColor) ---- */
const PATHS = {
  trend: <><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></>,
  roof: <><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>,
  gift: <><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M5 12v9h14v-9" /><path d="M12 8v13" /><path d="M12 8S9 3 6.5 4.5 8 8 12 8zM12 8s3-5 5.5-3.5S16 8 12 8z" /></>,
  leaf: <><path d="M4 20c8 2 16-4 16-16C10 4 4 10 4 20z" /><path d="M4 20c4-8 8-10 12-12" /></>,
  rupee: <><path d="M7 5h10M7 9h10M14 5c2 0 4 1.5 4 4s-2 4-4 4H9l6 6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></>,
  shield: <><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z" /><polyline points="9 12 11 14 15 10" /></>,
  meter: <><circle cx="12" cy="13" r="8" /><path d="M12 13l4-3" /><path d="M12 5V3" /></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" /></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  home: <><path d="M4 11l8-7 8 7" /><path d="M6 10v10h12V10" /><rect x="10" y="14" width="4" height="6" /></>,
  sun: <><circle cx="12" cy="12" r="4.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  bolt: <><polygon points="13 2 4 14 11 14 10 22 20 9 13 9" /></>,
  panel: <><rect x="3" y="4" width="18" height="12" rx="1" /><path d="M9 4v12M15 4v12M3 10h18" /><path d="M12 16v4M8 20h8" /></>,
  meterbox: <><rect x="5" y="3" width="14" height="18" rx="2" /><rect x="8" y="6" width="8" height="4" /><circle cx="9" cy="14" r="1" /><circle cx="15" cy="14" r="1" /></>,
  phone: <><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 10h8M8 13h5" /></>,
  check: <><polyline points="4 12 10 18 20 6" /></>,
  arrow: <><line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" /></>,
};

export function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] || null}
    </svg>
  );
}
