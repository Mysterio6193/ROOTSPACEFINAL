import React from 'react';
import MainLayout from '../layouts/MainLayout';

const audience = [
  {
    title: 'Independent professionals',
    text: 'For people who want structure, comfort, and a dependable place to work without the friction of setting up an office.',
  },
  {
    title: 'Small teams',
    text: 'For teams that need a mix of shared work, private focus, and meeting-ready space without overcommitting.',
  },
  {
    title: 'Client-facing businesses',
    text: 'For founders, consultants, and operators who need a workspace that looks professional when people walk in.',
  },
];

const steps = [
  'Schedule a visit and see the space in person',
  'Choose the workstation or cabin that fits your work style',
  'Move in with the essentials already set up',
];

export default function Join() {
  return (
    <MainLayout>
      <div className="rootspace-page">
        <section className="rootspace-page__hero rootspace-page__hero--warm">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__hero-grid">
              <div className="rootspace-page__hero-copy">
                <p className="rootspace-page__eyebrow">Join Rootspace</p>
                <h1>Set up your workday in a space built to support it.</h1>
                <p className="rootspace-page__lead">
                  Rootspace is for people who want a more serious, better-supported daily work environment in Bhopal,
                  whether they need a flexible desk, a dedicated station, or a private cabin.
                </p>
              </div>

              <div className="rootspace-page__hero-media">
                <img src="/assets/collage-home/ks-08895.jpg" alt="Rootspace office atmosphere" />
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__section-head">
              <p className="rootspace-page__eyebrow">Who It Fits</p>
              <h2>Made for people who need more than a temporary desk.</h2>
            </div>

            <div className="rootspace-page__cards">
              {audience.map((item) => (
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
            <div className="rootspace-page__split rootspace-page__split--center">
              <div>
                <p className="rootspace-page__eyebrow">How To Start</p>
                <h2>A simple path from visit to move-in.</h2>

                <div className="rootspace-page__steps">
                  {steps.map((step, index) => (
                    <div key={step} className="rootspace-page__step">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rootspace-page__hero-media rootspace-page__hero-media--tall">
                <img src="/assets/collage-home/ks-08921.jpg" alt="Community area at Rootspace" />
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__cta">
              <div>
                <p className="rootspace-page__eyebrow">Next Step</p>
                <h2>Book a visit and choose your Rootspace plan.</h2>
              </div>
              <a href="/#lets-connect" className="rootspace-page__button">Start with a tour</a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
