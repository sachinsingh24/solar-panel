import React from 'react';
import { BRAND, IMPACT, img } from '../data';
import { fmtInt } from '../format';
import { useReveal, useCountUp } from '../hooks';
import { Icon } from '../ui';

/* A single count-up stat in the hero trust strip. */
function ImpactStat({ item }) {
  const [ref, visible] = useReveal(0.4);
  const value = useCountUp(item.target, visible);
  const shown =
    item.target == null
      ? item.display
      : `${item.prefix || ''}${fmtInt(value)}${item.suffix || ''}`;
  return (
    <div className="impact__item" ref={ref}>
      <span className="impact__value">{shown}</span>
      <span className="impact__label">{item.label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${img('hero.jpg')})` }}
      />
      <div className="hero__overlay" />

      <div className="hero__inner">
        <p className="hero__eyebrow">
          <Icon name="sun" size={18} /> {BRAND.tagline}
        </p>
        <h1 className="hero__title">
          Turn your rooftop into a<br />
          <span className="hero__title-accent">power plant that pays you.</span>
        </h1>
        <p className="hero__sub">
          Sunlight is free — your electricity bill isn’t. A rooftop solar system
          quietly generates your own power every day, cuts your bill by up to
          90%, and pays for itself in a few short years.
        </p>

        <div className="hero__cta">
          <a className="btn btn--gold" href="#savings">
            See how much you’ll save <Icon name="arrow" size={18} />
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get a free quote
          </a>
        </div>

        <div className="impact">
          {IMPACT.map((item) => (
            <ImpactStat key={item.label} item={item} />
          ))}
        </div>
      </div>

      <a className="hero__scroll" href="#why" aria-label="Scroll to learn more">
        <span className="hero__scroll-dot" />
      </a>
    </header>
  );
}
