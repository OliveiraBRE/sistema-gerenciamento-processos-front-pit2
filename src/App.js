import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProjectList from "./components/PROJECT/ProjectList";
import NewProject from "./components/PROJECT/NewProject";
import Painel from "./components/PAINEL/Painel";

// const projectList = [
//   { name: "Card Game", id: 1, date: '01/11/22' },
//   { name: "Board Game", id: 2, date: '10/12/22' },
//   { name: "Video Game", id: 3, date: '30/02/23' },
// ];

function App() {
  const projects = useSelector(state => state);
  const [projectList, setProjectList] = useState([]);

  const setNewProjectHandler = (newProject) => {
    setProjectList((previousProjects => {
      return [...previousProjects, newProject];
    }));
  }

  return (

    <Routes>
      <Route path="/" element={
        <div className="container">
          <NewProject setNewProject={setNewProjectHandler} />
          <ProjectList projects={projects} />
        </div>
      } exact />
      <Route path="/painel" element={<Painel />} exact />
    </Routes>

  );
}

export default App;
