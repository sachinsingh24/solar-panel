import React from 'react';
import { GALLERY, img } from '../data';
import { Reveal, SectionHead } from '../ui';

// Give a couple of tiles extra span for a curated, magazine-style grid.
const BIG = new Set([0, 3]);

export default function Gallery() {
  return (
    <section className="section section--dark gallery" id="work">
      <div className="container">
        <SectionHead
          tone="light"
          eyebrow="Our work"
          title="Real rooftops. Real installations."
          sub="Every photo here is a system we designed, fabricated and switched on. This is what your roof could look like."
        />

        <div className="gallery__grid">
          {GALLERY.map((g, i) => (
            <Reveal
              className={`shot ${BIG.has(i) ? 'shot--big' : ''}`}
              delay={(i % 4) * 70}
              key={g.image}
            >
              <img src={img(g.image)} alt={g.caption} loading="lazy" />
              <span className="shot__caption">{g.caption}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
