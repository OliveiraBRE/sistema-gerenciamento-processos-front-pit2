import React from "react";
import Project from "./Project";
import Card from "../UI/Card";
import NewProject from "./NewProject";

import './ProjectList.css';

const ProjectList = (props) => {

  // const newProjectHandler = (event) => {
  //   console.log(event.target.innerHTML);
  // }

  return (<div className="project">
    <h1>Lista de Projetos</h1>
    <div className="container">
      <ul className="project-list">
        {
          props.projects.map(project => {
            return <Project key={props.id} project={project} />
          })
        }

        <Card>
          <div className="new-project">
            <h3 className="black-target">Novo Projeto</h3>
            <div className="new-project_add">
              <NewProject />
            </div>
          </div>
        </Card>

      </ul>
    </div>
  </div>);
};

export default ProjectList;