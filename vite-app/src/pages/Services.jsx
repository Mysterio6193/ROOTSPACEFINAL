import React from 'react';
import MainLayout from '../layouts/MainLayout';

const plans = [
  {
    title: 'Common work stations',
    price: '₹ 5,000/month',
    description: 'Flexible shared seating for freelancers, remote workers, and people who want a straightforward daily base.',
    image: '/assets/services/common_work.jpg',
    bullets: ['Flexible seating', 'High speed internet', 'Coffee and water', 'Housekeeping and clean washrooms'],
  },
  {
    title: 'Dedicated work stations',
    price: '₹ 10,000/month',
    description: 'Reserved desks for people who want a stable workstation, extra storage, and a more consistent setup.',
    image: '/assets/services/dedicated_workstation.jpg',
    bullets: ['Reserved desk', 'Storage cabinet', '20 free prints per month', '5 hours of PS5 gaming time'],
  },
  {
    title: 'Dedicated cabins',
    price: '₹ 20,000/month',
    description: 'Private enclosed workspaces for focused work, calls, and business conversations that need more privacy.',
    image: '/assets/services/dedicated_cabin.jpg',
    bullets: ['Private cabin', 'Dedicated telecom', '50 free prints per month', 'Assistant support'],
  },
  {
    title: 'Executive cabin',
    price: '₹ 40,000/month',
    description: 'A more premium setup with leadership seating, room for staff, and a polished area for client hosting.',
    image: '/assets/services/executive_cabin.jpg',
    bullets: ['Executive desk', 'Two staff workstations', 'Lounge seating', 'Assistant support'],
  },
];

const amenities = [
  '24/7 security',
  'Separate clean washrooms',
  'High speed internet across plans',
  'Unlimited coffee and water',
  'Housekeeping support',
  'Meeting-friendly environment',
];

export default function Services() {
  return (
    <MainLayout>
      <div className="rootspace-page">
        <section className="rootspace-page__hero">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__hero-grid">
              <div className="rootspace-page__hero-copy">
                <p className="rootspace-page__eyebrow">Spaces & Plans</p>
                <h1>Choose the setup that matches how you work.</h1>
                <p className="rootspace-page__lead">
                  Rootspace offers flexible shared seating, fixed desks, private cabins, and more premium work rooms,
                  all designed to feel clean, useful, and easy to work from.
                </p>
              </div>

              <div className="rootspace-page__hero-media">
                <img src="/assets/collage-home/day-01-photo-00874.jpg" alt="Rootspace interiors" />
              </div>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__section-head">
              <p className="rootspace-page__eyebrow">Membership Options</p>
              <h2>Rootspace plans with clear pricing.</h2>
            </div>

            <div className="rootspace-page__plan-grid">
              {plans.map((plan) => (
                <article key={plan.title} className="rootspace-page__plan">
                  <div className="rootspace-page__plan-image">
                    <img src={plan.image} alt={plan.title} />
                  </div>

                  <div className="rootspace-page__plan-body">
                    <div className="rootspace-page__plan-top">
                      <h3>{plan.title}</h3>
                      <span>{plan.price}</span>
                    </div>
                    <p>{plan.description}</p>

                    <ul className="rootspace-page__list">
                      {plan.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rootspace-page__section rootspace-page__section--muted">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__section-head">
              <p className="rootspace-page__eyebrow">Included Everyday</p>
              <h2>The basics are already handled.</h2>
            </div>

            <div className="rootspace-page__amenities">
              {amenities.map((item) => (
                <div key={item} className="rootspace-page__amenity">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__cta">
              <div>
                <p className="rootspace-page__eyebrow">Need Help Choosing?</p>
                <h2>Visit the space and compare the plans in person.</h2>
              </div>
              <a href="/#lets-connect" className="rootspace-page__button">Talk to Rootspace</a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
