import React from 'react';
import PropTypes from 'prop-types';
import './experience.css';

function Experience({ date, jobPosition, companyName, companyLocation, jobDescription, src, alt }) {
  return (
    <section className='experience-item'>
      <div className='experience-content'>
        <div className='experience-info'>
          <h4 className='date-heading'>{date}</h4>
          <h4 className='job-position'>{jobPosition}</h4>
          <h5 className='company-name'>{companyName}</h5>
          <h5 className='company-location'>{companyLocation}</h5>
          <p className='job-description'>{jobDescription}</p>
        </div>
        <div className='experience-image-wrapper'>
          <img src={src} alt={alt} className='experience-image' />
        </div>
      </div>
    </section>
  );
}

Experience.propTypes = {
  date: PropTypes.string.isRequired,
  jobPosition: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyLocation: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Experience;
