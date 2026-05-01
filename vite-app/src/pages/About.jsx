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

export default function About() {
  return (
    <MainLayout>
      <div className="rootspace-page">
        <section className="rootspace-page__hero rootspace-page__hero--warm">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__hero-grid">
              <div className="rootspace-page__hero-copy">
                <p className="rootspace-page__eyebrow">About Rootspace</p>
                <h1>Designed for focused people in Bhopal.</h1>
                <p className="rootspace-page__lead">
                  Rootspace is a work environment for people who want more than a desk. The space is built for clarity,
                  comfort, and steady output, with flexible options that suit independent professionals, growing teams,
                  and client-facing businesses.
                </p>
              </div>

              <div className="rootspace-page__hero-media">
                <img src="/assets/collage-home/day-01-photo-00770.jpg" alt="Rootspace lounge area" />
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__split">
              <div>
                <p className="rootspace-page__eyebrow">What It Feels Like</p>
                <h2>A workspace that stays practical without feeling plain.</h2>
                <p className="rootspace-page__body">
                  The goal is simple: make it easier to do good work. That means clean layouts, strong essentials,
                  polished meeting areas, and enough flexibility for different work styles to coexist without friction.
                </p>
              </div>

              <div className="rootspace-page__image-stack">
                <img src="/assets/collage-home/205bb.jpg" alt="Private cabins at Rootspace" />
                <img src="/assets/collage-home/day-01-photo-01247.jpg" alt="Collaborative work area at Rootspace" />
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
