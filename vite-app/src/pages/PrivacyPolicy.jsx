import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PolicyPage from '../components/PolicyPage';

const sections = [
  {
    title: 'What we collect',
    paragraphs: [
      'When you contact Rootspace, request a tour, or send an enquiry, we may collect information such as your name, email address, phone number, and the details you choose to share with us.',
      'We may also receive basic technical information such as browser type, device information, and general site usage patterns.',
    ],
  },
  {
    title: 'How we use information',
    items: [
      'To respond to enquiries and tour requests',
      'To communicate about plans, availability, and workspace services',
      'To improve the website and understand how it is being used',
      'To maintain service quality and internal records',
    ],
  },
  {
    title: 'Cookies and analytics',
    paragraphs: [
      'The website may use cookies or similar tools to support basic functionality and understand traffic patterns. You can usually control cookie behaviour through your browser settings.',
    ],
  },
  {
    title: 'Sharing information',
    paragraphs: [
      'Rootspace does not sell personal information. Information may be shared with service providers only when necessary to operate the website, communicate with users, or support routine business operations.',
      'Information may also be disclosed when required to comply with law, protect safety, or enforce legitimate business rights.',
    ],
  },
  {
    title: 'Your choices',
    paragraphs: [
      'You may contact Rootspace to update your information, ask questions about how your information is handled, or request that we stop certain communications.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <PolicyPage
        eyebrow="Privacy Policy"
        title="How Rootspace handles information shared through the site."
        updated="May 1, 2026"
        intro="This privacy policy explains the general types of information Rootspace may collect through its website and how that information may be used."
        sections={sections}
        closing="If you have privacy-related questions, contact Rootspace at rootspaceofficial@gmail.com."
      />
    </MainLayout>
  );
}
