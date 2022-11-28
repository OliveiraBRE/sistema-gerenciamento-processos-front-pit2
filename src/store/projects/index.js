import axios from "axios";


const getAllProjects = async () => {
  const projects = await axios.get("http://127.0.0.1:9901/projects")
    .then(result => result.data)
  return projects;
}

const createNewProject = async (newProject) => {
  await axios.post("http://127.0.0.1:9901/createProject", newProject)
    .then(result => console.log(result));
}


const INITIAL_STATE = [];

getAllProjects().then(result => {
  result.map(data => (
    INITIAL_STATE.push(data)
  ));
});

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'setNewProject') {
    createNewProject(action.newProject);
    // return state;
  }

  if (action.type === 'deleteProject') {
    const seletcProject = state.filter(project => project.id !== action.projectId);
    state = [...seletcProject];
  }

  getAllProjects().then(result => {
    result.map(data => (
      state.push(data)
    ));
  });

  return state;
}

export const setNewProject = (newProject) => {
  return {
    type: "setNewProject",
    newProject
  }
}

export const deleteProject = (projectId) => {
  return {
    type: "deleteProject",
    projectId
  }
}