import React, { useEffect, useState } from 'react';
import { BRAND } from '../data';

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
          <img
            className="nav__logo"
            src={`${process.env.PUBLIC_URL}/Shree Samarth Energy Solution.png`}
            alt="Shree Samarth Energy Solution logo"
          />
          <span>{BRAND.name}</span>
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
