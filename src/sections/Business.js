import React from 'react';
import { CORP_BENEFITS, CORP_MODELS, CORP_INDUSTRIES } from '../data';
import { Reveal, Icon, SectionHead } from '../ui';

export default function Business() {
  return (
    <section className="section business" id="business">
      <div className="container">
        <SectionHead
          eyebrow="For businesses"
          title="Solar that works as hard as your business"
          sub="Factories, warehouses, offices, hotels, hospitals and housing societies — commercial rooftops see the fastest payback of all, thanks to higher tariffs and generous tax benefits."
        />

        <div className="biz__grid">
          {CORP_BENEFITS.map((b, i) => (
            <Reveal className="benefit" delay={(i % 3) * 80} key={b.title}>
              <div className="benefit__icon">
                <Icon name={b.icon} size={24} />
              </div>
              <h3 className="benefit__title">{b.title}</h3>
              <p className="benefit__text">{b.text}</p>
            </Reveal>
          ))}
        </div>

        <h3 className="biz__subhead">Two ways to go solar</h3>
        <div className="biz__models">
          {CORP_MODELS.map((m, i) => (
            <Reveal className="bizmodel" delay={i * 100} key={m.tag}>
              <span className="bizmodel__tag">{m.tag}</span>
              <h4 className="bizmodel__title">{m.title}</h4>
              <p className="bizmodel__text">{m.text}</p>
              <ul className="bizmodel__points">
                {m.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={16} /> {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <h3 className="biz__subhead">Who we power</h3>
        <Reveal className="biz__tags">
          {CORP_INDUSTRIES.map((t) => (
            <span className="biz__tag" key={t}>{t}</span>
          ))}
        </Reveal>

        <div className="biz__cta">
          <a className="btn btn--gold" href="#contact">
            Book a commercial site assessment <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
