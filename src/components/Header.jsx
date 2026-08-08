import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { profile } from '../data.js';

const NAV_LINKS = [
  { href: '#stack', label: 'stack' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__row">
        <a href="#top" className="site-header__brand">
          <span className="site-header__prompt">~</span>sujith
        </a>

        <nav className="site-header__nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={profile.socials.github} aria-label="GitHub" className="icon-link" target="_blank" rel="noreferrer">
            <AiFillGithub size="1.3rem" />
          </a>
          <a href={profile.socials.linkedin} aria-label="LinkedIn" className="icon-link" target="_blank" rel="noreferrer">
            <AiFillLinkedin size="1.3rem" />
          </a>
          <button
            className="site-header__menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="site-header__mobile-nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
