import { createAction, createSlice } from "@reduxjs/toolkit";

// estado inicial
const initialState = {
  projects: [
    { name: "Card Game", id: 1, date: '01/11/22' },
    { name: "Board Game", id: 2, date: '10/12/22' },
    { name: "Video Game", id: 3, date: '30/02/23' },
  ]
};

export const projectsReducer = (state = initialState, action) => {
  if (action.type === 'getProjects') {
    return { name: "Card Game", id: 1, date: '01/11/22' }
  }
}

export const projects = createAction('getProjects');


