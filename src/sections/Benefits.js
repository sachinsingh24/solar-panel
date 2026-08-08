import React from 'react';
import { BENEFITS } from '../data';
import { Reveal, Icon, SectionHead } from '../ui';

export default function Benefits() {
  return (
    <section className="section benefits" id="benefits">
      <div className="container">
        <SectionHead
          eyebrow="The benefits"
          title="What you actually get out of it"
          sub="Solar isn’t just good for the planet — it’s one of the best returns your roof can earn."
        />

        <div className="benefits__grid">
          {BENEFITS.map((b, i) => (
            <Reveal className="benefit" delay={(i % 4) * 80} key={b.title}>
              <div className="benefit__icon">
                <Icon name={b.icon} size={24} />
              </div>
              <h3 className="benefit__title">{b.title}</h3>
              <p className="benefit__text">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
