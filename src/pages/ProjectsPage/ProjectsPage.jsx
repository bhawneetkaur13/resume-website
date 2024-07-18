import React from "react";
import { projectsData } from "../../utils/projectsData";
import Projects from "../../organisms/Projects/Projects";
import "./projectsPage.css";
import * as labels from "../../utils/labels";
import PageHeading from "../../atoms/PageHeading/PageHeading";

function ProjectsPage() {
  return (
    <section className="projects-hero-section">
        <PageHeading heading={labels.PROJECTS}/>
        {projectsData.map((project, index) => (
          <Projects
            key={index}
            projectName={project.projectName}
            roleTitle={project.roleTitle}
            projectDescription={project.projectDescription}
            src={project.src}
            alt={project.alt}
          />
        ))}
    </section>
  );
}

export default ProjectsPage;
