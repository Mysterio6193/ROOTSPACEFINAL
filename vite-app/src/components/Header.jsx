import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const routeLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Join', to: '/join' },
];

const RootspaceLogo = ({ invert = false }) => (
  <img
    src="/assets/rootspace_logo.png"
    alt="Rootspace"
    style={{
      height: '40px',
      width: 'auto',
      objectFit: 'contain',
      filter: invert ? 'brightness(0) invert(1)' : 'brightness(0)',
    }}
  />
);

function BurgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export default function Header({ color = 'transparent' }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const contactHref = pathname === '/' ? '#lets-connect' : '/#lets-connect';
  const servicesHref = pathname === '/' ? '#services' : '/#services';
  const galleryHref = pathname === '/' ? '#gallery' : '/#gallery';
  const isTransparent = color === 'transparent';

  return (
    <header className={`header_wrapper__MJ5bn${isTransparent ? ' header_transparent__rCyyn' : ''}${menuOpen ? ' header_-opened__CJ24_' : ''}`}>
      <div className="container_container__v5gtR">
        <div className="header_content__cVJDb">
          <div className="header_logo__LO_Jk">
            <Link to="/">
              <RootspaceLogo invert={false} />
            </Link>
          </div>

          <nav className="header_nav__if_jI" aria-label="Primary navigation">
            {routeLinks.map((item) => (
              <NavLink key={item.to} to={item.to} className="header_nav-item__Wn05d">
                <span data-text={item.label}>{item.label}</span>
              </NavLink>
            ))}
            <a href={servicesHref} className="header_nav-item__Wn05d">
              <span data-text="Spaces">Spaces</span>
            </a>
            <a href={galleryHref} className="header_nav-item__Wn05d">
              <span data-text="Gallery">Gallery</span>
            </a>
          </nav>

          <div className="header_actions__Sv09J">
            <a href={contactHref}>
              <span data-text="Book a Tour">Book a Tour</span>
            </a>
          </div>

          <button
            type="button"
            className="header_burger-control__YR_x_"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <BurgerIcon />
          </button>
        </div>
      </div>

      <div className={`burger-menu_wrapper__gKR7D${menuOpen ? ' burger-menu_open__' : ''}`} style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}>
        <div className="burger-menu_backdrop__wfXK5" onClick={() => setMenuOpen(false)}></div>
        <div className="burger-menu_content__rv4kf">
          <nav className="burger-menu_nav__dAhwA" aria-label="Mobile navigation">
            {routeLinks.map((item) => (
              <div key={item.to} className="burger-menu_nav-item__mCA9u">
                <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </NavLink>
              </div>
            ))}
            <div className="burger-menu_nav-item__mCA9u">
              <a href={servicesHref} onClick={() => setMenuOpen(false)}>Spaces</a>
            </div>
            <div className="burger-menu_nav-item__mCA9u">
              <a href={galleryHref} onClick={() => setMenuOpen(false)}>Gallery</a>
            </div>
            <div className="burger-menu_nav-item__mCA9u">
              <a href={contactHref} onClick={() => setMenuOpen(false)}>Book a Tour</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
