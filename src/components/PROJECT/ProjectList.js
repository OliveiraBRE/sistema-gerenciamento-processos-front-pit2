import React from "react";
import Project from "./Project";

import './ProjectList.css';

const ProjectList = (props) => {

  return (<div className="project">
    <h1>Lista de Projetos</h1>
    <ul className="project-list">

      {
        props.projects.map(project => (
          <li key={project.id} >
            <Project project={project} />
          </li>
        ))
      }
    </ul>
  </div>);
};

export default ProjectList;