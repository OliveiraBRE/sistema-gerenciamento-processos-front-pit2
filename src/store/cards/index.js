const INITIAL_STATE = [{
  data: [
    {
      "cardId": 0,
      "title": "Carta Tesouro",
      "description": "a recompensa do herói",
      "status": "backlog"
    },
    // {
    //   "cardId": 1,
    //   "title": "Armadilha",
    //   "description": "nem tudo na vida do herÃ³i Ã© fofo",
    //   "status": "did"
    // },

  ]
}];

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === "setNewCard") {
    const card = {
      cardId: state.length,
      title: action.newCard.title,
      description: action.newCard.description,
      status: "backlog"
    }

    console.log(state.length);
    state[0].data.push(card);

    return state;

  }

  if (action.type === "deleteCardById") {
    console.log("action.cardId") ;
  }
  return state;
}

export const setNewCard = (card) => {
  return {
    type: "setNewCard",
    newCard: {
      title: card.title,
      description: card.description,
    }
  }
}

export const deleteCardById = (cardId) => {
  return {
    type: deleteCardById,
    cardId
  }
}