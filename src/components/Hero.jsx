import React, { useEffect, useState } from 'react';
import { profile } from '../data.js';

const LINES = [
  { prompt: '$', text: 'whoami' },
  { prompt: '>', text: profile.name, isResult: true },
  { prompt: '$', text: 'cat role.txt' },
  { prompt: '>', text: `${profile.role} — ${profile.tagline}`, isResult: true },
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines >= LINES.length) return undefined;
    const current = LINES[visibleLines];

    if (charCount < current.text.length) {
      const speed = current.isResult ? 14 : 42;
      const t = setTimeout(() => setCharCount((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharCount(0);
    }, current.isResult ? 380 : 200);
    return () => clearTimeout(t);
  }, [charCount, visibleLines]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">available for new roles</span>
          <h1 className="hero__title">
            {profile.name}
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__bio">{profile.bio}</p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="terminal" role="img" aria-label="Terminal window showing developer introduction">
          <div className="terminal__bar">
            <span className="terminal__dot terminal__dot--red" />
            <span className="terminal__dot terminal__dot--yellow" />
            <span className="terminal__dot terminal__dot--green" />
            <span className="terminal__title">sujith@portfolio: ~</span>
          </div>
          <div className="terminal__body">
            {LINES.slice(0, visibleLines).map((line, i) => (
              <p key={i} className={line.isResult ? 'terminal__line terminal__line--result' : 'terminal__line'}>
                <span className="terminal__prompt">{line.prompt}</span> {line.text}
              </p>
            ))}
            {visibleLines < LINES.length && (
              <p className={LINES[visibleLines].isResult ? 'terminal__line terminal__line--result' : 'terminal__line'}>
                <span className="terminal__prompt">{LINES[visibleLines].prompt}</span>{' '}
                {LINES[visibleLines].text.slice(0, charCount)}
                <span className={`terminal__cursor ${showCursor ? 'is-visible' : ''}`}>▍</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
