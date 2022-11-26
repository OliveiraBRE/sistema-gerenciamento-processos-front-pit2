import React, { useState } from "react";
import ProjectList from "./PROJECT/ProjectList";
import NewProject from "./PROJECT/NewProject";
import Painel from "./PAINEL/Painel";

// const projectList = [
//   { name: "Card Game", id: 1, date: '01/11/22' },
//   { name: "Board Game", id: 2, date: '10/12/22' },
//   { name: "Video Game", id: 3, date: '30/02/23' },
// ];

function App() {

  const [projectList, setProjectList] = useState([]);

  const setNewProjectHandler = (newProject) => {
    setProjectList((previousProjects => {
      return [...previousProjects, newProject];
    }));
  }

  return (
    <div className="container">
      {/* <NewProject setNewProject={setNewProjectHandler} />
      <ProjectList projects={projectList} /> */}
      <Painel />
    </div>
  );
}

export default App;
