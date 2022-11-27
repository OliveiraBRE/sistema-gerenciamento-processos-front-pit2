import { createStore, combineReducers } from 'redux';

import projectsReducer from './projects/index';
import cardsReducer from './cards/index';

export const rootReducer = combineReducers({
  projects: projectsReducer,
  cards: cardsReducer
});

export default createStore(rootReducer);