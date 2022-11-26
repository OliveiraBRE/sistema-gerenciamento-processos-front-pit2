import React, {useRef} from "react";
import Button from "../UI/Button";

import './NewProject.css';

const NewProject = () => {
  const inputValue = useRef();

  const showValueHandler = (event) => {
    event.preventDefault();
    alert(inputValue.current.value);
  }

  return (
    <form onSubmit={showValueHandler}>
      <input type="text" ref={inputValue} placeholder="Nome do Projeto"/>
      <Button type="submit">Add</Button>
    </form>
  );
}

export default NewProject;