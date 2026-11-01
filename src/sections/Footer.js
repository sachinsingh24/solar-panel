import React from 'react';
import { BRAND } from '../data';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="nav__brand" href="#top">
            <img
              className="nav__logo"
              src={`${process.env.PUBLIC_URL}/Shree Samarth Energy Solution.png`}
              alt="Shree Samarth Energy Solution logo"
            />
            <span>{BRAND.name}</span>
          </a>
          <p className="footer__tag">{BRAND.tagline} Serving {BRAND.serviceArea}.</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Explore</h4>
            <a href="#why">Why solar</a>
            <a href="#how">How it works</a>
            <a href="#savings">Savings calculator</a>
            <a href="#packages">System sizes</a>
            <a href="#business">For business</a>
            <a href="#work">Our work</a>
          </div>
          <div className="footer__col">
            <h4>Talk to us</h4>
            <a href={BRAND.phoneHref}>{BRAND.phone}</a>
            <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <span>© {YEAR} {BRAND.name}. All rights reserved.</span>
        <span className="footer__disclaimer">
          Savings and pricing shown are indicative estimates, confirmed after a site survey.
        </span>
      </div>
    </footer>
  );
}
