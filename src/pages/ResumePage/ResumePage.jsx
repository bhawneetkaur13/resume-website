import React from "react";
import { experienceData } from "../../utils/experienceData";
import * as labels from "../../utils/labels";
import Experience from "../../organisms/Experience/Experience";
import "./resumePage.css";
import Button from "../../atoms/Button/Button";
import { educationData } from "../../utils/educationData";
import PageHeading from "../../atoms/PageHeading/PageHeading";

function ResumePage() {
  return (
    <section className="resume-section">
      <section className="resume-item">
        <PageHeading heading={labels.RESUME} />
        <div className="download-resume-section">
          <h3>{labels.EXPERIENCE}</h3>
          <a href="bhawneetResume.pdf" download>
          <Button label="Download CV" className="download-resume-button" />
          </a>
        </div>
        {experienceData.map((experience, index) => (
          <Experience
            key={index}
            className="experience-item"
            date={experience.date}
            jobPosition={experience.jobPosition}
            companyName={experience.companyName}
            companyLocation={experience.companyLocation}
            jobDescription={experience.jobDescription}
          />
        ))}
      </section>
      <section className="resume-item">
        <h3 className="education-heading">{labels.EDUCATION}</h3>
        {educationData.map((experience, index) => (
          <Experience
            key={index}
            className="experience-item"
            date={experience.date}
            jobPosition={experience.jobPosition}
            companyName={experience.companyName}
            companyLocation={experience.companyLocation}
            jobDescription={experience.jobDescription}
          />
        ))}
      </section>
    </section>
  );
}

export default ResumePage;
