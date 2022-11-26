import { createStore, combineReducers } from 'redux';

import projectsReducer from './projects/index';

export const rootReducer = combineReducers({
  projects: projectsReducer
});

export default createStore(rootReducer);