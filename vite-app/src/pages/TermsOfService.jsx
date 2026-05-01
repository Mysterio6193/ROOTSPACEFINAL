import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PolicyPage from '../components/PolicyPage';

const sections = [
  {
    title: 'Using the website',
    paragraphs: [
      'By accessing the Rootspace website, you agree to use it only for lawful and appropriate purposes related to learning about the workspace, contacting the team, or exploring available plans and services.',
    ],
  },
  {
    title: 'Content and availability',
    paragraphs: [
      'Rootspace may update, revise, or remove website content at any time. Plan details, visuals, pricing, features, and availability may change and should be confirmed directly before relying on them for a final decision.',
    ],
  },
  {
    title: 'Tour requests and communication',
    paragraphs: [
      'Submitting a contact form, sending a message, or requesting a tour does not automatically create a membership, reservation, or contractual entitlement. Any confirmed booking or commercial arrangement must be separately agreed with Rootspace.',
    ],
  },
  {
    title: 'Acceptable conduct',
    items: [
      'Do not misuse the website or attempt to interfere with its operation.',
      'Do not submit false, misleading, or abusive information.',
      'Do not copy or republish Rootspace branding, content, or media for commercial use without permission.',
    ],
  },
  {
    title: 'Limitation',
    paragraphs: [
      'The website is provided on an informational basis. While Rootspace aims to keep content accurate and current, it does not guarantee that every item will always be complete, uninterrupted, or error-free.',
    ],
  },
];

export default function TermsOfService() {
  return (
    <MainLayout>
      <PolicyPage
        eyebrow="Terms of Service"
        title="General terms for using the Rootspace website."
        updated="May 1, 2026"
        intro="These terms apply to general use of the Rootspace website and related online communications."
        sections={sections}
        closing="For booking, membership, or billing terms connected to a specific plan, Rootspace may provide additional written terms separately."
      />
    </MainLayout>
  );
}
