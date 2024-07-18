import React from 'react';
import PropTypes from 'prop-types';
import './projects.css';

function Projects({ projectName, roleTitle, projectDescription, src, alt }) {
  return (
    <section className='projects-item'>
      <div className='project-content'>
        <div className='project-info'>
          <h4 className='project-name'>{projectName}</h4>
          <h5 className='role-title'>{roleTitle}</h5>
          <p className='project-description'>{projectDescription}</p>
        </div>
        <div className='project-image-wrapper'>
          <img src={src} alt={alt} className='project-image' />
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  projectName: PropTypes.string.isRequired,
  roleTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Projects;
