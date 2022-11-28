import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import './Project.css';

const Project = (props) => {
  const { projectName, id } = props.project;

  const deleteProject = () => {
    if(window.confirm(`Deseja deletar o projeto ${projectName}`)) {
      props.deleteProject(id);
    }
  }

  const selectProject = () => {
    props.selectProject(props.project);
  }

  return (
    <div className="item">
      <Card>
        <h3>{projectName}</h3>
        <div className="project-card">
          <div className="project-card__info">
            <div className="project-card__info-percent">
              <div className="percent">0%</div>
            </div>
            {/* <div className="project-card__info-data">data: {date}</div> */}
          </div>
          <div className="project-buttons">
            <Button className="button-select" onClick={selectProject}>Selecionar</Button>
            <Button className="button-delete" onClick={deleteProject}>Deletar</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Project;