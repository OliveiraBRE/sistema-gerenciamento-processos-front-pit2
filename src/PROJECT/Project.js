import React from "react";
import Button from "../UI/Button";

import './Project.css';

const Project = (props) => {
  const {name, date, description} = props.project;
  return (
    <li>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{description}</p>
      <div className="project-buttons">
      <Button className="button-select">Selecionar</Button>
      <Button className="button-delete">Deletar</Button>
      </div>
    </li>
  );
}

export default Project;