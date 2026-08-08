import React from 'react';
import { WHY } from '../data';
import { Reveal, Icon, SectionHead } from '../ui';

export default function WhySolar() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <SectionHead
          eyebrow="Why solar, why now"
          title="The case for going solar has never been stronger"
          sub="Four reasons the smartest money on your roof is a solar system."
        />

        <div className="why__grid">
          {WHY.map((item, i) => (
            <Reveal className="why__card" delay={i * 90} key={item.title}>
              <div className="why__icon">
                <Icon name={item.icon} size={26} />
              </div>
              <h3 className="why__title">{item.title}</h3>
              <p className="why__text">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
