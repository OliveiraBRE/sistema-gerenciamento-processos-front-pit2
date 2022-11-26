const INITIAL_STATE = [
  { name: "Card Game", id: 1, date: '01/11/22' },
  { name: "Board Game", id: 2, date: '10/12/22' },
  { name: "Video Game", id: 3, date: '30/02/23' }
]

export default function reducer(state = INITIAL_STATE, action) {
  if(action.type === 'setNewProject'){
    return [...state, action.newProject];
  }

  if(action.type === 'deleteProject'){
    const seletcProject = state.filter(project => project.id !== action.projectId);
    state = [...seletcProject];   
  }

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