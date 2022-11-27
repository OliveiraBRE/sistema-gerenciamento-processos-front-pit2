import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewCard } from "../../store/cards";

import Button from "../UI/Button";

import './NewCard.css';

const NewCard = (props) => {
  const params = useParams();
  const cardTitle = useRef();
  const cardDescription = useRef();
  const dispatch = useDispatch();

  const newCardEntranceHandler = (event) => {
    event.preventDefault();

    const card = {
      title: cardTitle.current.value,
      description: cardDescription.current.value
    }

    dispatch(setNewCard(card));
  }

  return (
    <div className="new-card">
      <h3 className="card_black-target">{params.project}</h3>
      <div className="new-card_add">
        <form className="new-card_form" onSubmit={newCardEntranceHandler}>
          <input type="text" ref={cardTitle} placeholder="Novo Card" id="entered" autoFocus />
          <textarea cols="31" rows="5" ref={cardDescription} placeholder="Descrição" maxLength="120"></textarea>
          <Button type="submit">Add</Button>
        </form>
      </div>
    </div>

  );
}

export default NewCard;