import React from 'react';

export default function PolicyPage({ eyebrow, title, updated, intro, sections, closing }) {
  return (
    <div className="rootspace-page">
      <section className="rootspace-page__hero rootspace-page__hero--warm">
        <div className="container_container__v5gtR">
          <div className="rootspace-page__hero-copy rootspace-page__hero-copy--narrow">
            {eyebrow ? <p className="rootspace-page__eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            <p className="rootspace-page__lead">{intro}</p>
            {updated ? <p className="rootspace-page__meta">Last updated: {updated}</p> : null}
          </div>
        </div>
      </section>

      <section className="rootspace-page__section">
        <div className="container_container__v5gtR">
          <div className="rootspace-page__policy-shell">
            {sections.map((section) => (
              <article key={section.title} className="rootspace-page__policy-section">
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items?.length ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}

            {closing ? <p className="rootspace-page__policy-note">{closing}</p> : null}
          </div>
        </div>
      </section>
    </div>
  );
}
