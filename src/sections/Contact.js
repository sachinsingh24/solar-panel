import React from 'react';
import { BRAND } from '../data';
import { Reveal, Icon } from '../ui';

/*
 * Final call-to-action. The contact form itself is intentionally left out —
 * drop your own form component in where marked and it'll sit neatly here.
 * (Form-field styles are already defined in App.css under "CONTACT".)
 */
export default function Contact() {
  return (
    <section className="section section--dark contact" id="contact">
      <div className="container">
        <Reveal className="contact__center">
          <span className="sechead__eyebrow sechead__eyebrow--light">
            <span className="sechead__eyebrow-dot" />
            Let’s get you started
          </span>
          <h2 className="contact__title">
            Ready to stop renting your power and start owning it?
          </h2>
          <p className="contact__sub">
            Tell us your average bill and we’ll come back with a free, no-pressure
            rooftop plan — recommended size, exact price after subsidy, and your
            expected savings. Serving {BRAND.serviceArea}.
          </p>

          <div className="contact__direct">
            <a className="contact__method" href={BRAND.phoneHref}>
              <Icon name="phone" size={20} /> {BRAND.phone}
            </a>
            <a
              className="contact__method"
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="chat" size={20} /> WhatsApp us
            </a>
            <a className="contact__method" href={`mailto:${BRAND.email}`}>
              <Icon name="arrow" size={20} /> {BRAND.email}
            </a>
          </div>

          {/* ▼▼▼ Your contact form goes here ▼▼▼ */}
        </Reveal>
      </div>
    </section>
  );
}
