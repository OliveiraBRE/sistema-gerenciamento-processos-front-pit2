import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import './Project.css';

const Project = (props) => {
  const { name, date } = props.project;
  return (
    <li>
      <Card>
        <h3>{name}</h3>
        <p className="project-card" >data: {date}</p>
      </Card>
      <div className="project-buttons">
        <Button className="button-select">Selecionar</Button>
        <Button className="button-delete">Deletar</Button>
      </div>
    </li>
  );
}

export default Project;