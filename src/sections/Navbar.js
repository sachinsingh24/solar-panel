import React, { useEffect, useState } from 'react';
import { BRAND } from '../data';
import { Icon } from '../ui';

const LINKS = [
  ['Why solar', '#why'],
  ['How it works', '#how'],
  ['Benefits', '#benefits'],
  ['Savings', '#savings'],
  ['Systems', '#packages'],
  ['Business', '#business'],
  ['Our work', '#work'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--solid' : ''} ${menuOpen ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="nav__logo"><Icon name="sun" size={22} /></span>
          {BRAND.name}
        </a>

        <div className="nav__links">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn--gold btn--sm nav__cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Free quote
          </a>
        </div>

        <button
          className="nav__burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
