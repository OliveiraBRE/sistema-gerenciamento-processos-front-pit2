import React, { useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProjectList from "./components/PROJECT/ProjectList";
import NewProject from "./components/PROJECT/NewProject";
import Painel from "./components/PAINEL/Painel";

import { setNewProject, deleteProject } from './store/projects';


// const projectList = [
//   { name: "Card Game", id: 1, date: '01/11/22' },
//   { name: "Board Game", id: 2, date: '10/12/22' },
//   { name: "Video Game", id: 3, date: '30/02/23' },
// ];

function App() {
  const { projects } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [project, setProject] = useState('');

  const setNewProjectHandler = (newProject) => {
    dispatch(setNewProject(newProject));
  }

  const deleteProjectHandler = (projectId) => {
    dispatch(deleteProject(projectId));
  }

  const selectProjectHandler = (project) => {
    setProject(project)
    navigate('/painel');
  }

  return (

    <Routes>
      <Route path="/" element={
        <div className="container">
          <NewProject setNewProject={setNewProjectHandler} />
          <ProjectList
            projects={projects}
            deleteProject={deleteProjectHandler}
            selectProject={selectProjectHandler}
          />
        </div>
      } exact />
      <Route path="/painel" element={<Painel project={project}/>} />
    </Routes>

  );
}

export default App;
