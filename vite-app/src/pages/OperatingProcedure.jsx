import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PolicyPage from '../components/PolicyPage';

const sections = [
  {
    title: 'Tours and enquiries',
    paragraphs: [
      'Prospective members can enquire through the website, email, phone, or by requesting a tour. Rootspace may ask basic contact information in order to schedule visits and respond properly.',
      'Tours are subject to workspace availability and may be coordinated to avoid disrupting existing members.',
    ],
  },
  {
    title: 'Bookings and access',
    paragraphs: [
      'Access to desks, cabins, meeting rooms, or shared facilities is governed by the plan selected by the member and any written confirmation provided by Rootspace.',
      'Guest visits, special access requests, and after-hours arrangements may require prior approval depending on the plan and the nature of use.',
    ],
  },
  {
    title: 'Member conduct',
    items: [
      'Maintain a professional and respectful working environment.',
      'Use meeting rooms and enclosed spaces responsibly and leave them ready for the next user.',
      'Avoid excessive noise in shared focus areas.',
      'Treat all furniture, devices, and common facilities with care.',
    ],
  },
  {
    title: 'Workspace upkeep',
    paragraphs: [
      'Rootspace maintains housekeeping, utilities, and common areas as part of its daily operations. Members are expected to keep desks, cabins, and shared rooms reasonably tidy during and after use.',
      'If any issue affects safety, cleanliness, access, or equipment, members should report it promptly so it can be resolved.',
    ],
  },
  {
    title: 'Changes and exceptions',
    paragraphs: [
      'Operational practices may change as the space evolves, new plans are introduced, or facility requirements shift. Rootspace may update procedures when needed to preserve service quality and safety.',
    ],
  },
];

export default function OperatingProcedure() {
  return (
    <MainLayout>
      <PolicyPage
        eyebrow="Operational Standards"
        title="Visitor, booking, and workspace procedures."
        updated="May 1, 2026"
        intro="This page outlines the basic operating standards used for tours, bookings, access, shared spaces, and member conduct at Rootspace."
        sections={sections}
        closing="For questions about how a specific plan, booking, or access request works, contact Rootspace directly before confirming use."
      />
    </MainLayout>
  );
}
