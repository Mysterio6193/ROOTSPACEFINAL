import React from 'react';
import MainLayout from '../layouts/MainLayout';

const updates = [
  {
    date: 'April 2026',
    title: 'Rootspace expands its cabin and meeting inventory',
    text: 'The next phase of the workspace focuses on more private rooms, stronger meeting infrastructure, and a smoother daily flow for teams.',
    image: '/assets/collage-home/day-01-photo-00874.jpg',
  },
  {
    date: 'March 2026',
    title: 'Community-first workspace events begin rolling out',
    text: 'Rootspace started opening its calendar to smaller member meetups, work sessions, and networking evenings inside the space.',
    image: '/assets/collage-home/ks-08921.jpg',
  },
  {
    date: 'January 2026',
    title: 'Rootspace refines its workspace identity in Bhopal',
    text: 'The focus remains clear: cleaner work setups, stronger interiors, and a more serious environment for focused people.',
    image: '/assets/collage-home/day-01-photo-01247.jpg',
  },
];

export default function PressAndMedia() {
  return (
    <MainLayout>
      <div className="rootspace-page">
        <section className="rootspace-page__hero">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__hero-copy rootspace-page__hero-copy--narrow">
              <p className="rootspace-page__eyebrow">Press & Media</p>
              <h1>Updates, announcements, and public-facing Rootspace stories.</h1>
              <p className="rootspace-page__lead">
                A single place for launch notes, workspace updates, community announcements, and press contact information.
              </p>
            </div>
          </div>
        </section>

        <section className="rootspace-page__section">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__article-grid">
              {updates.map((item) => (
                <article key={item.title} className="rootspace-page__article">
                  <div className="rootspace-page__article-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="rootspace-page__article-body">
                    <div className="rootspace-page__article-meta">{item.date}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rootspace-page__section rootspace-page__section--muted">
          <div className="container_container__v5gtR">
            <div className="rootspace-page__cta">
              <div>
                <p className="rootspace-page__eyebrow">Media Contact</p>
                <h2>For collaboration, brand requests, or press enquiries.</h2>
              </div>
              <a href="mailto:rootspaceofficial@gmail.com" className="rootspace-page__button">Email Rootspace</a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
