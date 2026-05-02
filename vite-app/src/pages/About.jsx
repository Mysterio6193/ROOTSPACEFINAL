import React from 'react';
import MainLayout from '../layouts/MainLayout';

const highlights = [
  {
    title: 'Focused atmosphere',
    text: 'Every zone is designed to help people settle in quickly, work deeply, and stay comfortable for long stretches.',
  },
  {
    title: 'Flexible ways to work',
    text: 'Shared desks, dedicated stations, private cabins, and meeting-ready rooms give teams room to choose the right setup.',
  },
  {
    title: 'Daily comfort built in',
    text: 'Fast internet, housekeeping, coffee, water, clean washrooms, and round-the-clock security support the everyday flow.',
  },
];

const principles = [
  'Calm interiors that reduce visual noise',
  'Work settings for solo focus and team coordination',
  'Professional spaces for client meetings and presentations',
  'A Bhopal base that feels polished, practical, and dependable',
];

const experienceDetails = [
  {
    label: 'Quiet by default',
    text: 'The layout keeps focus zones calm while still making room for collaboration when it is needed.',
  },
  {
    label: 'Ready for meetings',
    text: 'Cabins, client-ready rooms, and polished common areas help the space feel more professional day to day.',
  },
  {
    label: 'Comfort that lasts',
    text: 'Good lighting, reliable basics, and clean upkeep make longer workdays feel easier to sustain.',
  },
];

export default function About() {
  return (
    <MainLayout>
      <div className="rootspace-page rootspace-page--about">
        <section className="rootspace-page__hero rootspace-page__hero--warm rootspace-page__hero--about">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__hero-grid rootspace-page__hero-grid--about">
              <div className="rootspace-page__hero-copy">
                <p className="rootspace-page__eyebrow">About Rootspace</p>
                <h1>Designed for focused people in Bhopal.</h1>
                <p className="rootspace-page__lead">
                  Rootspace is a work environment for people who want more than a desk. The space is built for clarity,
                  comfort, and steady output, with flexible options that suit independent professionals, growing teams,
                  and client-facing businesses.
                </p>
              </div>

              <div className="rootspace-page__hero-media rootspace-page__hero-media--about">
                <img src="/assets/collage-home/day-01-photo-00770.jpg" alt="Rootspace lounge area" />
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__split rootspace-page__split--about">
              <div className="rootspace-page__story">
                <p className="rootspace-page__eyebrow">What It Feels Like</p>
                <h2>A workspace that stays practical without feeling plain.</h2>
                <p className="rootspace-page__body">
                  The goal is simple: make it easier to do good work. That means clean layouts, strong essentials,
                  polished meeting areas, and enough flexibility for different work styles to coexist without friction.
                </p>
              </div>

              <div className="rootspace-page__about-visual">
                <figure className="rootspace-page__image-card rootspace-page__image-card--about-main">
                  <img src="/assets/collage-home/day-01-photo-00874.jpg" alt="Open work lounge at Rootspace" />
                </figure>

                <div className="rootspace-page__about-notes">
                  {experienceDetails.map((item) => (
                    <article key={item.label} className="rootspace-page__about-note">
                      <p className="rootspace-page__about-note-label">{item.label}</p>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section rootspace-page__section--muted">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__section-head">
              <p className="rootspace-page__eyebrow">Why It Works</p>
              <h2>Built around the everyday rhythm of work.</h2>
            </div>

            <div className="rootspace-page__cards">
              {highlights.map((item) => (
                <article key={item.title} className="rootspace-page__card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__checklist-shell">
              <div className="rootspace-page__section-head">
                <p className="rootspace-page__eyebrow">Rootspace Standard</p>
                <h2>Small details that make the space easier to use.</h2>
              </div>

              <div className="rootspace-page__checklist">
                {principles.map((item) => (
                  <div key={item} className="rootspace-page__check">
                    <span className="rootspace-page__check-mark" aria-hidden="true">+</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__cta">
              <div>
                <p className="rootspace-page__eyebrow">See It In Person</p>
                <h2>Walk through the space and find the right setup.</h2>
              </div>
              <a href="/#lets-connect" className="rootspace-page__button">Book a tour</a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
