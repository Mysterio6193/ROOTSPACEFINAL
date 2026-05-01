import React from 'react';
import MainLayout from '../layouts/MainLayout';

const options = [
  {
    title: 'Hot desk',
    detail: 'Best for flexible solo work',
    price: '₹ 5,000/month',
    text: 'A shared seating option for people who want access, comfort, and low-friction daily use.',
  },
  {
    title: 'Dedicated desk',
    detail: 'Best for consistent routines',
    price: '₹ 10,000/month',
    text: 'A fixed setup for members who want a stable workstation and a more anchored workday.',
  },
  {
    title: 'Private cabin',
    detail: 'Best for deeper focus',
    price: '₹ 20,000/month',
    text: 'A more enclosed setup for concentrated work, longer calls, and a quieter business presence.',
  },
  {
    title: 'Executive cabin',
    detail: 'Best for leadership and client hosting',
    price: '₹ 40,000/month',
    text: 'A premium room with extra seating and a stronger professional feel for senior operators or teams.',
  },
];

const questions = [
  'Do you need flexibility or a fixed seat?',
  'Will clients or collaborators visit often?',
  'Do you need privacy for calls and meetings?',
  'Will you use the space solo or with a team?',
];

export default function Search() {
  return (
    <MainLayout>
      <div className="rootspace-page">
        <section className="rootspace-page__hero rootspace-page__hero--warm">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__hero-grid">
              <div className="rootspace-page__hero-copy">
                <p className="rootspace-page__eyebrow">Space Finder</p>
                <h1>Compare the Rootspace plans before you visit.</h1>
                <p className="rootspace-page__lead">
                  If you already know how you work, choosing a better setup gets easier. Start with the scale of focus,
                  privacy, and flexibility you need most.
                </p>
              </div>

              <div className="rootspace-page__hero-media">
                <img src="/assets/collage-home/4f8fb.jpg" alt="Rootspace interiors and work zones" />
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__section-head">
              <p className="rootspace-page__eyebrow">Compare Options</p>
              <h2>Four ways to use the space well.</h2>
            </div>

            <div className="rootspace-page__cards rootspace-page__cards--two">
              {options.map((item) => (
                <article key={item.title} className="rootspace-page__card">
                  <p className="rootspace-page__card-kicker">{item.detail}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="rootspace-page__price">{item.price}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rootspace-page__section rootspace-page__section--muted">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__split rootspace-page__split--center">
              <div>
                <p className="rootspace-page__eyebrow">Quick Self-Check</p>
                <h2>Use these questions before booking a tour.</h2>
              </div>

              <div className="rootspace-page__checklist-shell">
                <div className="rootspace-page__checklist rootspace-page__checklist--single">
                  {questions.map((item) => (
                    <div key={item} className="rootspace-page__check">
                      <span className="rootspace-page__check-mark" aria-hidden="true">+</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
