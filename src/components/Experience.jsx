import React from 'react';
import { timeline } from '../data.js';

const Experience = () => (
  <section className="section" id="experience">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">04 · experience</span>
        <h2 className="section-heading">Career log</h2>
        <p className="section-lede">
          Twelve years, four employers, one habit of shipping — read top to bottom like a commit history.
        </p>
      </div>

      <ol className="git-log">
        {timeline
          .slice()
          .reverse()
          .map((entry) => (
            <li className={`git-log__entry ${entry.current ? 'is-current' : ''}`} key={entry.hash}>
              <div className="git-log__rail">
                <span className="git-log__node" />
              </div>
              <div className="git-log__content">
                <p className="git-log__meta">
                  <span className="git-log__hash">{entry.hash}</span>
                  <span className="git-log__range">{entry.range}</span>
                  {entry.current && <span className="git-log__badge">HEAD</span>}
                </p>
                <p className="git-log__title">{entry.title}</p>
                {entry.org && <p className="git-log__org">{entry.org}</p>}
              </div>
            </li>
          ))}
      </ol>
    </div>
  </section>
);

export default Experience;
