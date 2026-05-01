import React from 'react';
import MainLayout from '../layouts/MainLayout';

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061" />
  </svg>
);

const WifiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" d="M3 8.5a15 15 0 0 1 18 0M6.5 12.5a9.5 9.5 0 0 1 11 0M10 16.25a4.5 4.5 0 0 1 4 0" />
    <circle cx="12" cy="19.2" r="1.2" fill="currentColor" />
  </svg>
);

const CoffeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 8.5h10v4.75A3.75 3.75 0 0 1 11.25 17H8.75A3.75 3.75 0 0 1 5 13.25zm10 1h1.5a2.5 2.5 0 0 1 0 5H15M7 4.5v1.5m3-1.5v1.5m3-1.5v1.5M4.5 20h12" />
  </svg>
);

const PantryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7.5 4.5v6m0 0a2.5 2.5 0 1 0 5 0v-6m4 0v15M14 7.5h5M7.5 19.5v-5.25m0 0H5.25m2.25 0h2.25" />
  </svg>
);

const LoungeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 11.5A2.5 2.5 0 0 1 7.5 9H9a2 2 0 0 1 2 2v2.5m0 0V10a2 2 0 0 1 2-2h1.5A2.5 2.5 0 0 1 17 10.5v3m-12 0V17m12-3.5V17M4.5 17h15" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3.5 6.5 5.75v4.5c0 3.9 2.4 7.47 5.5 9.25 3.1-1.78 5.5-5.35 5.5-9.25v-4.5z" />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m9.75 11.75 1.5 1.5 3-3.25" />
  </svg>
);

const PrintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 8V4.5h10V8M7 16h10v3.5H7zm-1.5-7h13A2.5 2.5 0 0 1 21 11.5v3A2.5 2.5 0 0 1 18.5 17H17M7 17H5.5A2.5 2.5 0 0 1 3 14.5v-3A2.5 2.5 0 0 1 5.5 9" />
    <circle cx="17.25" cy="12.5" r=".9" fill="currentColor" />
  </svg>
);

const MeetingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 7.5h12v9H6zM9 12h6M9 16.5h2.5M18 10l2-1.5v6L18 13" />
  </svg>
);

const EventIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 4.5v2M17 4.5v2M5.5 8h13A1.5 1.5 0 0 1 20 9.5v9A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-9A1.5 1.5 0 0 1 5.5 8Zm0 4h13" />
    <circle cx="9" cy="15" r="1" fill="currentColor" />
    <circle cx="12" cy="15" r="1" fill="currentColor" />
    <circle cx="15" cy="15" r="1" fill="currentColor" />
  </svg>
);

const galleryImages = [
  { src: '/assets/collage-home/day-01-photo-00770.jpg', alt: 'Rootspace lounge with warm seating' },
  { src: '/assets/collage-home/day-01-photo-01247.jpg', alt: 'Rootspace collaborative work area' },
  { src: '/assets/collage-home/151f4.jpg', alt: 'Rootspace workspace detail' },
  { src: '/assets/collage-home/205bb.jpg', alt: 'Rootspace cabin area' },
  { src: '/assets/collage-home/day-01-photo-00874.jpg', alt: 'Rootspace community corner' },
  { src: '/assets/collage-home/day-01-photo-1134.jpg', alt: 'Rootspace meeting setup' },
  { src: '/assets/collage-home/38776.jpg', alt: 'Rootspace shared workspace' },
  { src: '/assets/collage-home/4f8fb.jpg', alt: 'Rootspace interiors' },
  { src: '/assets/collage-home/ks-08921.jpg', alt: 'Rootspace event moment' },
  { src: '/assets/collage-home/ks-08895.jpg', alt: 'Rootspace office atmosphere' },
];

const services = [
  {
    img: '/assets/services/common_work.jpg',
    imagePosition: 'center 48%',
    label: 'Common work stations',
    text: 'Flexible, shared seating with no fixed desks and no long-term friction. A strong fit for freelancers, remote workers, and early-stage teams.',
    duration: '1 MONTH',
    price: '₹ 5,000/month',
    bullets: [
      'Clean table and chair',
      'High speed internet',
      'Unlimited coffee and water',
      'Housekeeping service',
      'Separate clean washrooms',
      '24/7 security',
      'Common telecom service',
    ],
  },
  {
    img: '/assets/services/dedicated_workstation.jpg',
    imagePosition: 'center 48%',
    label: 'Dedicated work stations',
    text: 'Reserved desks for a more stable workday, with extra storage and access to the same high-comfort common amenities.',
    duration: '1 MONTH',
    price: '₹ 10,000/month',
    bullets: [
      'Dedicated table and chair',
      'High speed internet',
      'Unlimited coffee and water',
      'Housekeeping service',
      'Separate clean washrooms',
      '24/7 security',
      'Common telecom service',
      'Small storage cabinets',
      'Free 20 prints per month',
      'Free PS5 gaming time of 5 hours',
    ],
  },
  {
    img: '/assets/services/dedicated_cabin.jpg',
    imagePosition: 'center 52%',
    label: 'Dedicated cabins',
    text: 'Private enclosed space for focused work, client conversations, and a more premium daily workflow.',
    duration: '1 MONTH',
    price: '₹ 20,000/month',
    bullets: [
      'Private cabin',
      'High speed internet',
      'Unlimited coffee and water',
      'Housekeeping service',
      'Separate clean washrooms',
      '24/7 security',
      'Dedicated telecom',
      'Large storage cabinets',
      'Free 50 prints per month',
      'Free PS5 gaming time of 10 hours',
      'Common assistant support',
    ],
  },
  {
    img: '/assets/services/executive_cabin.jpg',
    imagePosition: 'center 44%',
    label: 'Executive cabin',
    text: 'An elevated setup with room for leadership, staff seating, client hosting, and a more polished business presence.',
    duration: '1 MONTH',
    price: '₹ 40,000/month',
    bullets: [
      'Boss table and chair',
      'High speed internet',
      'Unlimited coffee and water',
      'Housekeeping service',
      'Separate clean washrooms',
      '24/7 security',
      'Dedicated telecom',
      'Large storage cabinets',
      'Free 50 prints per month',
      'Free PS5 gaming time of 10 hours',
      'Common assistant support',
      'Two extra workstations for staff',
      'Couches and small table',
    ],
  },
];

const amenities = [
  {
    icon: WifiIcon,
    title: 'High-Speed WiFi',
    text: 'Strong internet that can carry long focus blocks, calls, uploads, and full team usage without feeling fragile.',
  },
  {
    icon: CoffeeIcon,
    title: 'Coffee & Water',
    text: 'Unlimited daily comfort so the workday keeps moving without constant breakaway logistics.',
  },
  {
    icon: PantryIcon,
    title: 'Stocked Pantry',
    text: 'Useful everyday support for the in-between moments that make a full day in the space easier to sustain.',
  },
  {
    icon: LoungeIcon,
    title: 'Chilling Lounge',
    text: 'Relaxed corners for resets, informal conversations, and the quieter pauses that keep the pace balanced.',
  },
  {
    icon: ShieldIcon,
    title: '24/7 Security',
    text: 'A more dependable environment with the peace of mind serious workspaces are expected to provide.',
  },
  {
    icon: PrintIcon,
    title: 'Print & Scan',
    text: 'Quick access to practical business tools when paperwork, decks, or client handouts need to move fast.',
  },
  {
    icon: MeetingIcon,
    title: 'Meeting Rooms',
    text: 'Professional settings for presentations, discussions, hiring conversations, and higher-stakes calls.',
  },
  {
    icon: EventIcon,
    title: 'Event Setups',
    text: 'Flexible corners that can support workshops, launches, community sessions, and smaller brand moments.',
  },
];

export default function Home() {
  const [arrowsInView, setArrowsInView] = React.useState(false);
  const [amenitiesInView, setAmenitiesInView] = React.useState(false);
  const [galleryInView, setGalleryInView] = React.useState(false);
  const [serviceModal, setServiceModal] = React.useState(null);
  const arrowsSectionRef = React.useRef(null);
  const amenitiesSectionRef = React.useRef(null);
  const gallerySectionRef = React.useRef(null);
  const heroSectionRef = React.useRef(null);
  const whyVideoRef = React.useRef(null);
  const whySectionRef = React.useRef(null);
  const servicesListRef = React.useRef(null);

  React.useEffect(() => {
    const node = arrowsSectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setArrowsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!arrowsInView) return undefined;

    const titleEm = arrowsSectionRef.current?.querySelector('.arrows-section_title__a4gyt .em');
    if (!titleEm || titleEm.dataset.split) return undefined;

    const text = titleEm.textContent || '';
    const letters = Array.from(text);
    titleEm.innerHTML = letters.map((ch, i) => `<span style="--i:${i}">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('');
    titleEm.dataset.split = '1';

    return undefined;
  }, [arrowsInView]);

  React.useEffect(() => {
    const node = heroSectionRef.current;
    if (!node) return undefined;

    let rafId = null;

    const updateHeroProgress = () => {
      rafId = null;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const isMobileHero = window.matchMedia('(max-width: 767px)').matches;
      const raw = total > 0
        ? (isMobileHero ? -rect.top / total : (window.innerHeight - rect.top) / total)
        : 0;
      const progress = Math.min(1, Math.max(0, raw));
      node.style.setProperty('--hero-scroll-progress', progress.toFixed(4));
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(updateHeroProgress);
    };

    updateHeroProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  React.useEffect(() => {
    const node = whyVideoRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('visible');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const node = whySectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('visible');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const node = amenitiesSectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAmenitiesInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const node = gallerySectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setGalleryInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const node = servicesListRef.current;
    if (!node) return undefined;

    const rows = Array.from(node.querySelectorAll('.services_row'));
    if (!rows.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('service-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!serviceModal) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setServiceModal(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [serviceModal]);

  return (
    <MainLayout headerColor="transparent">
      <section
        ref={heroSectionRef}
        className="hero_root__N0Loz hero_scroll-anim"
        style={{ visibility: 'visible' }}
      >
        <div className="hero_top__WegWw">
          <div className="hero_bg__S_r_n">
            <div className="hero_back__8ReFI">
              <img alt="" loading="lazy" decoding="async" style={{ color: 'transparent' }} src="/assets/backdd66.jpg" />
            </div>
            <div className="hero_house__aJy7p">
              <img alt="" loading="eager" decoding="async" style={{ color: 'transparent' }} src="/assets/house8df6.png" />
            </div>
            <div className="hero_composite__3blHB">
              <div className="hero_house__aJy7p">
                <img alt="" loading="eager" decoding="async" style={{ color: 'transparent' }} src="/assets/house8df6.png" />
              </div>
            </div>
            <div className="hero_clouds__bC7V4">
              <div className="hero_cloud__TvA3o"><img alt="" loading="lazy" decoding="async" style={{ color: 'transparent' }} src="/assets/cloudf791.png" /></div>
              <div className="hero_cloud__TvA3o"><img alt="" loading="lazy" decoding="async" style={{ color: 'transparent' }} src="/assets/cloudf791.png" /></div>
            </div>
            <div className="hero_smoke__8za_R">
              <img alt="" decoding="async" style={{ color: 'transparent' }} src="/assets/smokee68c.png" />
            </div>
          </div>
          <div className="hero_content__DK_Ny">
            <div className="container_container__v5gtR">
              <div className="hero_title__JpmHS">
                <h1>Bhopal&apos;s Biggest Co-working Space</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={whySectionRef} className="why-us_root__aGsFp">
        <div className="container_container__v5gtR">
          <div className="why-us_grid__RSZoF">
            <div className="why-us_title__N3aCA"><h2>Why Rootspace?</h2></div>
            <div className="why-us_text__rT1u9">
              Rootspace is built for people who want more than a rented desk,{` `}
              <span className="em">it is a cleaner, better-paced work environment with the privacy, comfort, and presence serious work needs.</span>
            </div>
          </div>
          <div className="why-us_preview__OofJt video-anim" ref={whyVideoRef}>
            <video src="/videos/why-us.mp4" autoPlay playsInline loop muted></video>
          </div>
        </div>
      </section>

      <section
        ref={arrowsSectionRef}
        className={`arrows-section_root__yyPBl ${arrowsInView ? 'arrows-section_visible' : ''}`}
      >
        <div className="container_container__v5gtR">
          <div className="arrows-section_title__a4gyt">
            <h2>This isn&apos;t just <span className="em">about desks.</span></h2>
          </div>
          <div className="arrows-section_arrows__BPayV">
            {['/assets/151f4.jpg', '/assets/205bb.jpg', '/assets/38776.jpg', '/assets/4f8fb.jpg'].map((src, i) => (
              <div key={i} className="arrows-section_arrow___KXxg" style={{ transitionDelay: `${i * 120}ms` }}>
                <img alt="" loading="lazy" decoding="async" style={{ color: 'transparent' }} src={src} />
              </div>
            ))}
          </div>
          <div className="arrows-section_text__Z1Oii">
            <p>
              Rootspace brings together focused work zones, polished shared areas, and a more grounded atmosphere. You are not just choosing a seat —{` `}
              <span className="em">you are choosing the kind of day you want to have every time you show up.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="services_root__Ch_WM" id="services">
        <div className="container_container__v5gtR">
          <div className="services_hgrid__9FHyx">
            <div className="services_hgrid-col__9VVDn"><div className="services_caption__Q_j1k">Services</div></div>
            <div className="services_hgrid-col__9VVDn">
              <div className="services_title__eMyhw"><h2>Choose the <span className="em">Rootspace setup</span> that fits you</h2></div>
            </div>
          </div>
          <div className="services_rows" ref={servicesListRef}>
            {services.map((service, i) => (
              <section
                key={`${service.label}-${i}`}
                className={`services_row services_row--${i + 1}`}
                style={{ '--service-image-position': service.imagePosition }}
                role="button"
                tabIndex={0}
                onClick={() => setServiceModal(service)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setServiceModal(service);
                  }
                }}
              >
                <div className="services_row-media">
                  <img src={service.img} alt={service.label} loading="lazy" decoding="async" />
                </div>

                <div className="services_row-inner container_container__v5gtR">
                  <div className="services_row-left">
                    <div className="services_row-number">{i + 1}</div>
                    <div className="services_row-copy">{service.text}</div>
                  </div>
                  <div className="services_row-right">
                    <h2 className="services_row-title">{service.label}</h2>
                    <div className="services_row-arrow">→</div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="services_brief__OJqWD">
            <div>
              Shared desks, private cabins, daily essentials, and a work atmosphere that feels clean, capable, and consistent —{` `}
              <span className="em">that is the Rootspace difference.</span>
            </div>
          </div>
        </div>
      </section>

      {serviceModal && (
        <div className="services-modal_backdrop" role="dialog" aria-modal="true" onClick={() => setServiceModal(null)}>
          <div className="services-modal_panel" onClick={(event) => event.stopPropagation()}>
            <button className="services-modal_close" type="button" onClick={() => setServiceModal(null)} aria-label="Close image">
              ✕
            </button>
            <div className="services-modal_header">
              <div className="services-modal_title">{serviceModal.label}</div>
              <div className="services-modal_text">{serviceModal.text}</div>
            </div>
            <div className="services-modal_media">
              <div style={{ maxWidth: 720, width: '100%' }}>
                <img className="services-modal_image" src={serviceModal.img} alt={serviceModal.label} />

                <div style={{ marginTop: '1.6rem' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.6rem' }}>Includes:</h4>
                    <ul style={{ margin: 0, paddingLeft: '1.4rem' }}>
                      {serviceModal.bullets.map((bullet, index) => (
                        <li key={index} style={{ marginBottom: '0.4rem' }}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.6rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.2rem' }}>
                    <div style={{ opacity: 0.9 }}>{serviceModal.duration}</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{serviceModal.price}</div>
                  </div>

                  <div style={{ marginTop: '0.8rem', opacity: 0.7, fontSize: '0.95rem' }}>
                    18% GST is additional. Personalised quotations are available for different durations and team sizes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="features_root__CCic6">
        <div className="container_container__v5gtR">
          <div className="features_grid__wL0aQ">
            <div>
              <div className="features_title__vVo3d">
                <h2><div>Built<br /> for Work. <span className="em">Designed</span><br /> <span className="em">for Life.</span></div></h2>
              </div>
            </div>
            <div>
              <div className="features_text__Wp8am">
                <p>
                  Rootspace is designed to support the full workday —{` `}
                  <span className="em">focused hours, professional meetings, quiet resets, and the small comforts that keep the pace sustainable.</span>
                </p>
              </div>
              <div className="features_actions__f8ehB">
                <div>
                  <a className="button_button-round__TFjlU button_color-primary__JJ7Hh button_inversed__slQcI" href="#lets-connect" style={{ display: 'inline-flex' }}>
                    <div className="button_content__6Zh3n">
                      <div className="button_button-round-text__IEwW5"><span data-text="Book a Tour">Book a Tour</span></div>
                      <span className="button_icon-after__vljdM"><ArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="features_items__oPgtQ">
            {[
              { img: '/assets/mortgage-servicesbcea.jpg', title: 'Quiet Library Feel', text: 'Distraction-free corners, strong WiFi, and a calmer atmosphere for long hours of real concentration.' },
              { img: '/assets/property-managementbd2e.jpg', title: 'Meeting-Ready Spaces', text: 'Professional rooms for presentations, team conversations, and client meetings that need the right setting.' },
              { img: '/assets/development95f9.jpg', title: 'Comfort That Helps Work', text: 'Coffee, shared amenities, clean upkeep, and relaxed zones that make the workday easier to sustain.' },
            ].map((feature) => (
              <div key={feature.title} className="features_item__IPG1i">
                <div className="features_item-bg__gntQ1"><img alt={feature.title} loading="lazy" decoding="async" style={{ color: 'transparent', width: '100%', height: 'auto' }} src={feature.img} /></div>
                <div className="features_item-title__uXmdj"><h3>{feature.title}</h3></div>
                <div className="features_item-text__X8po0"><p>{feature.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={amenitiesSectionRef}
        className={`amenities-showcase${amenitiesInView ? ' amenities-showcase--visible' : ''}`}
      >
        <div className="container_container__v5gtR">
          <div className="amenities-showcase__head">
            <div className="amenities-showcase__eyebrow">Elite Facilities</div>
            <h2>Massive Space, Elite Facilities</h2>
            <p>
              Rootspace pairs its scale with the comforts, business tools, and support details that make long workdays
              feel smoother, sharper, and more premium.
            </p>
          </div>

          <div className="amenities-showcase__grid">
            {amenities.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="amenities-showcase__card" style={{ '--amenity-delay': `${index * 90}ms` }}>
                  <div className="amenities-showcase__icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        ref={gallerySectionRef}
        className={`rootspace-gallery${galleryInView ? ' rootspace-gallery--visible' : ''}`}
        id="gallery"
      >
        <div className="container_container__v5gtR">
          <div className="rootspace-gallery__head">
            <div className="rootspace-gallery__caption">Gallery</div>
            <h2>
              A closer look at <span>Rootspace life.</span>
            </h2>
          </div>

          <div className="rootspace-gallery__collage" aria-label="Rootspace gallery">
            {galleryImages.map((image, index) => (
              <figure key={image.src} className={`rootspace-gallery__tile rootspace-gallery__tile--${index + 1}`} style={{ '--tile-delay': `${index * 85}ms` }}>
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
