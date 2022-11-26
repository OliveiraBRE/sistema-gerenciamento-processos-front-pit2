import { createStore } from 'redux';

const INITIAL_STATE = [
  { name: "Card Game", id: 1, date: '01/11/22' },
  { name: "Board Game", id: 2, date: '10/12/22' },
  { name: "Video Game", id: 3, date: '30/02/23' }
]

const reducer = (state = INITIAL_STATE, action) => {
  return state;
}

export default createStore(reducer);