import React from 'react';
import { PACKAGES } from '../data';
import { Reveal, Icon, SectionHead } from '../ui';

export default function Packages() {
  return (
    <section className="section section--tint packages" id="packages">
      <div className="container">
        <SectionHead
          eyebrow="Find your fit"
          title="A size for every rooftop"
          sub="From a small flat to a busy shop floor — pick the ballpark, then we fine-tune it to your exact load."
        />

        <div className="packages__grid">
          {PACKAGES.map((p, i) => (
            <Reveal className={`pkg ${p.popular ? 'pkg--popular' : ''}`} delay={i * 80} key={p.size}>
              {p.popular && <span className="pkg__flag">Most popular</span>}
              <span className="pkg__for">{p.forWhom}</span>
              <span className="pkg__size">{p.size}</span>

              <ul className="pkg__specs">
                <li><Icon name="sun" size={17} /> Generates {p.units}</li>
                <li><Icon name="rupee" size={17} /> Offsets {p.offsets}</li>
                <li><Icon name="shield" size={17} /> 25-yr panel warranty</li>
              </ul>

              <div className="pkg__price">
                <span className="pkg__from">from</span>
                <span className="pkg__amt">{p.price}</span>
                <span className="pkg__after">after subsidy*</span>
              </div>

              <a className={`btn ${p.popular ? 'btn--gold' : 'btn--outline'} pkg__btn`} href="#contact">
                Get this quote
              </a>
            </Reveal>
          ))}
        </div>

        <p className="packages__note">
          *Indicative turnkey prices after applicable subsidy, for typical residential
          rooftops. Final pricing is confirmed after a free site survey.
        </p>
      </div>
    </section>
  );
}
