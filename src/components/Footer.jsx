import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { profile } from '../data.js';

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="container footer__inner">
      <div className="footer__lead">
        <span className="eyebrow">05 · contact</span>
        <h2 className="section-heading">Let's build something</h2>
        <p className="section-lede">
          Open to new roles and interesting problems. The fastest way to reach me is email.
        </p>
        <div className="footer__contacts">
          <a href={`mailto:${profile.email}`} className="footer__contact-link">
            <AiOutlineMail size="1.1rem" /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="footer__contact-link">
            <AiOutlinePhone size="1.1rem" /> {profile.phone}
          </a>
        </div>
      </div>

      <div className="footer__socials">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-link icon-link--lg">
          <AiFillGithub size="1.6rem" />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-link icon-link--lg">
          <AiFillLinkedin size="1.6rem" />
        </a>
        <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="icon-link icon-link--lg">
          <AiFillInstagram size="1.6rem" />
        </a>
      </div>
    </div>
    <div className="footer__bar">
      <div className="container footer__bar-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer__signoff">// innovating and solving problems</span>
      </div>
    </div>
  </footer>
);

export default Footer;
