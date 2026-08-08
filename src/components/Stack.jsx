import React from 'react';
import { stack } from '../data.js';

const Stack = () => (
  <section className="section" id="stack">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">02 · stack</span>
        <h2 className="section-heading">Tools I reach for</h2>
        <p className="section-lede">
          Frontend, backend, and the automation layer that keeps releases honest —
          organised the way I'd organise them in a project.
        </p>
      </div>

      <div className="stack-panel">
        <div className="stack-panel__bar">
          <span className="stack-panel__filename">stack.json</span>
        </div>
        <div className="stack-panel__grid">
          {stack.map((group, i) => (
            <div className="stack-group" key={group.key}>
              <p className="stack-group__key">
                <span className="stack-group__quote">"</span>
                {group.label}
                <span className="stack-group__quote">"</span>
                <span className="stack-group__colon">:</span>
              </p>
              <ul className="stack-group__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {i < stack.length - 1 && <span className="stack-group__comma">,</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stack;
