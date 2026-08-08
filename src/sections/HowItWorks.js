import React from 'react';
import { STEPS } from '../data';
import { Reveal, Icon, SectionHead } from '../ui';

const STEP_ICONS = ['sun', 'bolt', 'home', 'meterbox'];

export default function HowItWorks() {
  return (
    <section className="section section--dark how" id="how">
      <div className="container">
        <SectionHead
          tone="light"
          eyebrow="How it works"
          title="From sunlight to savings in four steps"
          sub="No engineering degree required — here’s the whole journey a ray of sun takes to lower your bill."
        />

        <div className="how__flow">
          {STEPS.map((step, i) => (
            <Reveal className="how__step" delay={i * 120} key={step.num}>
              <div className="how__badge">
                <Icon name={STEP_ICONS[i]} size={30} />
                <span className="how__num">{step.num}</span>
              </div>
              <h3 className="how__title">{step.title}</h3>
              <p className="how__text">{step.text}</p>
              {i < STEPS.length - 1 && <span className="how__arrow"><Icon name="arrow" size={22} /></span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
