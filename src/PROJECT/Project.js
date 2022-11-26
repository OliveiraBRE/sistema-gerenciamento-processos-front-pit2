import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import './Project.css';

const Project = (props) => {
  const { name, date } = props.project;
  return (
    <div className="item">
      <Card>
        <h3>{name}</h3>
        <div className="project-card">
          <div className="project-card__info">
            <div className="project-card__info-percent">
              <div className="percent">45%</div>
            </div>
            <div className="project-card__info-data">data: {date}</div>
          </div>
          <div className="project-buttons">
            <Button className="button-select">Selecionar</Button>
            <Button className="button-delete">Deletar</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Project;