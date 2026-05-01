import React from 'react';
import MainLayout from '../layouts/MainLayout';

const communityGroups = [
  {
    title: 'Independent professionals',
    text: 'Consultants, writers, designers, founders, and remote workers who need a calm place to work every day.',
  },
  {
    title: 'Growing teams',
    text: 'Small teams that want flexible seating, a cleaner setup, and room to move into cabins or meeting rooms as they grow.',
  },
  {
    title: 'Client-facing operators',
    text: 'Businesses that need a space that feels polished when collaborators, investors, or clients visit.',
  },
];

const supportRoles = [
  'Tours and plan matching',
  'Front desk and guest assistance',
  'Meeting room coordination',
  'Daily upkeep and housekeeping',
  'Internet, utilities, and workspace readiness',
  'On-ground help for teams settling in',
];

export default function Agents() {
  return (
    <MainLayout>
      <div className="rootspace-page">
        <section className="rootspace-page__hero rootspace-page__hero--warm">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__hero-grid">
              <div className="rootspace-page__hero-copy">
                <p className="rootspace-page__eyebrow">Rootspace Community</p>
                <h1>The people who make Rootspace feel useful every day.</h1>
                <p className="rootspace-page__lead">
                  Rootspace is not only about interiors. It works because the space, the support, and the people using it
                  all move at the same professional pace.
                </p>
              </div>

              <div className="rootspace-page__hero-media">
                <img src="/assets/collage-home/day-01-photo-1134.jpg" alt="Rootspace community area" />
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__section-head">
              <p className="rootspace-page__eyebrow">Who Works Here</p>
              <h2>A stronger mix than a one-size-fits-all office.</h2>
            </div>

            <div className="rootspace-page__cards">
              {communityGroups.map((group) => (
                <article key={group.title} className="rootspace-page__card">
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rootspace-page__section rootspace-page__section--muted">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__split rootspace-page__split--center">
              <div>
                <p className="rootspace-page__eyebrow">Support System</p>
                <h2>Behind the space is a simple, dependable operating rhythm.</h2>
                <p className="rootspace-page__body">
                  Members do not need to solve every small thing themselves. From first tours to everyday use, the space
                  is meant to feel prepared, not improvised.
                </p>
              </div>

              <div className="rootspace-page__checklist-shell">
                <div className="rootspace-page__checklist rootspace-page__checklist--single">
                  {supportRoles.map((role) => (
                    <div key={role} className="rootspace-page__check">
                      <span className="rootspace-page__check-mark" aria-hidden="true">+</span>
                      <p>{role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__cta">
              <div>
                <p className="rootspace-page__eyebrow">Visit Rootspace</p>
                <h2>See how the space feels when it is actually in motion.</h2>
              </div>
              <a href="/#lets-connect" className="rootspace-page__button">Book a tour</a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
