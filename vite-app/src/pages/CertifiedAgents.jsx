import React from 'react';
import MainLayout from '../layouts/MainLayout';

const standards = [
  {
    title: 'Before you arrive',
    text: 'Book the right plan, confirm guest visits in advance when needed, and arrive with a clear sense of how you want to use the space.',
  },
  {
    title: 'During the workday',
    text: 'Keep common areas calm, take longer calls in more suitable zones, and respect the balance between shared energy and focused quiet.',
  },
  {
    title: 'Meeting rooms and cabins',
    text: 'Use enclosed rooms thoughtfully, leave them clean after use, and keep handovers smooth for the next person.',
  },
  {
    title: 'End of day',
    text: 'Leave your desk or cabin ready for the next session, keep personal clutter minimal, and help preserve the overall order of the space.',
  },
];

const promises = [
  'Professional environment without unnecessary noise',
  'Shared areas that stay clean and presentable',
  'Clear rules for guests, bookings, and common use',
  'A workspace that still feels warm, not rigid',
];

export default function CertifiedAgents() {
  return (
    <MainLayout>
      <div className="rootspace-page">
        <section className="rootspace-page__hero">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__hero-grid">
              <div className="rootspace-page__hero-copy">
                <p className="rootspace-page__eyebrow">Rootspace Standards</p>
                <h1>The small rules that keep the space calm and professional.</h1>
                <p className="rootspace-page__lead">
                  Rootspace works best when the environment stays predictable, clean, and considerate for everyone using it.
                  These are the habits that protect that experience.
                </p>
              </div>

              <div className="rootspace-page__hero-media">
                <img src="/assets/collage-home/38776.jpg" alt="Rootspace shared workspace" />
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__section-head">
              <p className="rootspace-page__eyebrow">How The Space Stays Good</p>
              <h2>Good design needs good use.</h2>
            </div>

            <div className="rootspace-page__cards rootspace-page__cards--two">
              {standards.map((item) => (
                <article key={item.title} className="rootspace-page__card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rootspace-page__section rootspace-page__section--muted">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__checklist-shell">
              <div className="rootspace-page__section-head">
                <p className="rootspace-page__eyebrow">What Members Can Expect</p>
                <h2>A more reliable day because the standards are shared.</h2>
              </div>

              <div className="rootspace-page__checklist">
                {promises.map((item) => (
                  <div key={item} className="rootspace-page__check">
                    <span className="rootspace-page__check-mark" aria-hidden="true">+</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
