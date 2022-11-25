import React from "react";
import Project from "./Project";
import Button from "../UI/Button";

import './ProjectList.css';

const ProjectList = (props) => {

  const newProjectHandler = () => {
   
  }

  return (<div className="project">
    <h1>Lista de Projetos</h1>
    <ul className="project-list">
      {
        props.projects.map(project => {
          return <Project key={props.id} project={project} />
        })
      }
    </ul>
    <Button onClick={newProjectHandler}>Novo Projeto</Button>
  </div>);
};

export default ProjectList;