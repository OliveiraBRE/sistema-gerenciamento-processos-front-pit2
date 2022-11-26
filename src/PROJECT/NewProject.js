import React, { useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import './NewProject.css';

const NewProject = (props) => {
  const enteredProjectName = useRef();

  const showValueHandler = (event) => {
    event.preventDefault();

    const projectName = enteredProjectName.current.value;

    if (projectName.trim()) {
      const newProject = {
        name: projectName,
        id: Math.floor(Math.random() * (100 - 1) + 1),
        date: Date.now()
      }

      props.setNewProject(newProject);
      document.querySelector('#entered').value = '';
    }

  }

  return (
    <div className="new-project">
      <Card>
        <h3 className="black-target">Novo Projeto</h3>
        <div className="new-project_add">
          <form onSubmit={showValueHandler}>
            <input type="text" ref={enteredProjectName} placeholder="Nome do Projeto" id="entered" autofocus/>
            <Button type="submit">Add</Button>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default NewProject;