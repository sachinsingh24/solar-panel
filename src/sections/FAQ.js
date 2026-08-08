import React, { useState } from 'react';
import { FAQS } from '../data';
import { Reveal, SectionHead } from '../ui';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container container--narrow">
        <SectionHead
          eyebrow="Good questions"
          title="The things everyone asks first"
        />

        <Reveal className="faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="faq__plus" aria-hidden="true" />
                </button>
                <div className="faq__a" style={{ maxHeight: isOpen ? '320px' : '0px' }}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
