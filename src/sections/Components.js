import React from 'react';
import { COMPONENTS, img } from '../data';
import { Reveal, SectionHead } from '../ui';

export default function Components() {
  return (
    <section className="section components" id="system">
      <div className="container">
        <SectionHead
          eyebrow="The catalogue"
          title="What’s actually inside your solar system"
          sub="A rooftop system is just four honest parts working together. Here’s each one — photographed on one of our own installs."
        />

        <div className="components__grid">
          {COMPONENTS.map((c, i) => (
            <Reveal className="comp" delay={(i % 2) * 100} key={c.title}>
              <div className="comp__media">
                <img src={img(c.image)} alt={c.title} loading="lazy" />
                <span className="comp__tag">{c.tag}</span>
              </div>
              <div className="comp__body">
                <h3 className="comp__title">{c.title}</h3>
                <p className="comp__text">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
