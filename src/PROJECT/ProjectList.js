import React from "react";
import Project from "./Project";
import Button from "../UI/Button";
import Card from "../UI/Card";

import './ProjectList.css';

const ProjectList = (props) => {

  const newProjectHandler = (event) => {
    console.log(event.target.innerHTML);
  }

  return (<div className="project">
    <h1>Lista de Projetos</h1>
    <ul className="project-list">
      {
        props.projects.map(project => {
          return <Project key={props.id} project={project} />
        })
      }

      <Card>
        <Button onClick={newProjectHandler}>Novo Projeto</Button>
      </Card>

    </ul>
  </div>);
};

export default ProjectList;