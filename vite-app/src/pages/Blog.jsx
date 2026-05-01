import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const articles = [
  {
    slug: 'how-to-build-a-focused-workday',
    date: 'May 1, 2026',
    category: 'Productivity',
    title: 'How to build a focused workday that actually holds together',
    excerpt: 'Good workdays rarely happen by accident. The right environment, the right pace, and fewer unnecessary switches matter more than most people admit.',
    image: '/assets/collage-home/day-01-photo-00770.jpg',
    sections: [
      {
        heading: 'Start with fewer decisions',
        paragraphs: [
          'A better workday usually begins before the first task. When the desk, internet, lighting, and seat are already handled, energy stays available for actual work.',
          'That is one reason consistent work environments matter. They reduce setup friction and make it easier to get into flow earlier.',
        ],
      },
      {
        heading: 'Protect the middle of the day',
        paragraphs: [
          'The strongest concentration window often arrives after momentum has already started. Breaking it too often for noise, logistics, or moving around has a real cost.',
          'Focused spaces, quiet corners, and meeting rooms that are separate from everyday seating help preserve that middle stretch.',
        ],
      },
    ],
  },
  {
    slug: 'what-to-look-for-in-a-coworking-space',
    date: 'April 24, 2026',
    category: 'Workspace',
    title: 'What to look for in a coworking space before you commit',
    excerpt: 'A visually nice office is not enough. The details that shape your actual workday are usually more practical than promotional.',
    image: '/assets/collage-home/day-01-photo-01247.jpg',
    sections: [
      {
        heading: 'Check the everyday basics first',
        paragraphs: [
          'Internet quality, washrooms, housekeeping, temperature control, and how people move through the space will affect your work more than decorative details.',
          'If those parts feel inconsistent, the aesthetic will not save the experience.',
        ],
      },
      {
        heading: 'Match the plan to your work style',
        paragraphs: [
          'Some people need flexibility. Others need the psychological stability of the same desk every day. Teams may need a private cabin or a meeting-friendly setup.',
          'Choosing the wrong type of plan creates friction even in a good space.',
        ],
      },
    ],
  },
  {
    slug: 'meeting-room-etiquette-that-keeps-a-space-feeling-premium',
    date: 'April 14, 2026',
    category: 'Culture',
    title: 'Meeting room etiquette that keeps a workspace feeling premium',
    excerpt: 'Professional spaces stay professional when members treat shared rooms as part of a larger system, not as isolated conveniences.',
    image: '/assets/collage-home/day-01-photo-1134.jpg',
    sections: [
      {
        heading: 'Leave the next hour ready',
        paragraphs: [
          'A good room handover matters. Clean surfaces, reset chairs, and wrapped-up conversations help the next booking start smoothly.',
          'The best shared spaces feel reliable because small resets happen consistently.',
        ],
      },
      {
        heading: 'Use enclosed rooms for the right reasons',
        paragraphs: [
          'When longer calls, presentations, or sensitive conversations move into a dedicated room, the larger workspace stays calmer for everyone else too.',
          'That separation improves both concentration and courtesy at the same time.',
        ],
      },
    ],
  },
  {
    slug: 'why-flexible-workspace-demand-is-rising-in-bhopal',
    date: 'April 2, 2026',
    category: 'Bhopal',
    title: 'Why flexible workspace demand is rising in Bhopal',
    excerpt: 'More founders, consultants, remote teams, and service businesses now need work environments that sit between home and a conventional lease.',
    image: '/assets/collage-home/ks-08895.jpg',
    sections: [
      {
        heading: 'Work patterns are changing',
        paragraphs: [
          'Many professionals no longer want to choose only between home, cafés, and full private offices. They want a better middle ground.',
          'That middle ground has to feel reliable enough for real work and professional enough for meetings.',
        ],
      },
      {
        heading: 'Flexibility is now part of the value',
        paragraphs: [
          'People want the ability to start with a smaller setup and move into something more private as their work grows.',
          'That kind of flexibility lowers hesitation and makes a workspace more useful across different phases of business.',
        ],
      },
    ],
  },
];

function ArticleList() {
  return (
    <div className="rootspace-page">
      <section className="rootspace-page__hero">
        <div className="container_container__v5gtR">
          <div className="rootspace-page__hero-copy rootspace-page__hero-copy--narrow">
            <p className="rootspace-page__eyebrow">Rootspace Journal</p>
            <h1>Notes on focused work, workspace culture, and better daily routines.</h1>
            <p className="rootspace-page__lead">
              A simple editorial space for ideas that sit close to how Rootspace is actually used: work habits, environment,
              meetings, business rhythm, and the changing shape of work in Bhopal.
            </p>
          </div>
        </div>
      </section>

      <section className="rootspace-page__section">
        <div className="container_container__v5gtR">
          <div className="rootspace-page__article-grid">
            {articles.map((article) => (
              <article key={article.slug} className="rootspace-page__article">
                <div className="rootspace-page__article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="rootspace-page__article-body">
                  <div className="rootspace-page__article-meta">{article.category} · {article.date}</div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link className="rootspace-page__article-link" to={`/blog/${article.slug}`}>
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ArticleDetail({ article }) {
  return (
    <div className="rootspace-page">
      <section className="rootspace-page__hero rootspace-page__hero--warm">
        <div className="container_container__v5gtR">
          <div className="rootspace-page__hero-grid">
            <div className="rootspace-page__hero-copy">
              <p className="rootspace-page__eyebrow">{article.category}</p>
              <h1>{article.title}</h1>
              <p className="rootspace-page__lead">{article.excerpt}</p>
              <p className="rootspace-page__meta">{article.date}</p>
            </div>

            <div className="rootspace-page__hero-media">
              <img src={article.image} alt={article.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="rootspace-page__section">
        <div className="container_container__v5gtR">
          <div className="rootspace-page__article-detail">
            <Link to="/blog" className="rootspace-page__back-link">Back to journal</Link>

            {article.sections.map((section) => (
              <article key={section.heading} className="rootspace-page__policy-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Blog() {
  const { slug } = useParams();
  const article = slug ? articles.find((item) => item.slug === slug) : null;

  return (
    <MainLayout>
      {slug ? (
        article ? (
          <ArticleDetail article={article} />
        ) : (
          <div className="rootspace-page">
            <section className="rootspace-page__section">
              <div className="container_container__v5gtR">
                <div className="rootspace-page__cta">
                  <div>
                    <p className="rootspace-page__eyebrow">Article Not Found</p>
                    <h2>The journal entry you requested is not available.</h2>
                  </div>
                  <Link to="/blog" className="rootspace-page__button">Back to journal</Link>
                </div>
              </div>
            </section>
          </div>
        )
      ) : (
        <ArticleList />
      )}
    </MainLayout>
  );
}
