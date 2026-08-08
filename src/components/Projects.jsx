import React from 'react';
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';
import { projects } from '../data.js';

const Projects = () => (
  <section className="section" id="projects">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">03 · projects</span>
        <h2 className="section-heading">Things I've shipped</h2>
        <p className="section-lede">
          A mix of applications and the test-automation frameworks that back them up.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card__media">
              <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
            </div>
            <div className="project-card__body">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-card__links">
                <a href={project.repo} target="_blank" rel="noreferrer" className="project-card__link">
                  <AiFillGithub size="1.05rem" /> Source
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link">
                    Live demo <AiOutlineArrowRight size="0.95rem" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
