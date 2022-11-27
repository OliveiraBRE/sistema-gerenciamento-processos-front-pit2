import React, {useRef} from "react";
import Button from "../UI/Button";

import './NewCard.css';

const NewCard = (props) => {
  const cardTitle = useRef();
  const cardDescription = useRef();

  const newCardEntranceHandler = (event) => {
    event.preventDefault();

    console.log(cardTitle.current.value);
    console.log(cardDescription.current.value);
  }

  return (
    <div className="new-card">
        <h3 className="card_black-target">{props.project.name}</h3>
        <div className="new-card_add">
          <form className="new-card_form" onSubmit={newCardEntranceHandler}>
            <input type="text" ref={cardTitle} placeholder="Novo Card" id="entered" autoFocus/>
            <textarea cols="31" rows="5" ref={cardDescription} placeholder="Descrição" maxLength="120"></textarea>
            <Button type="submit">Add</Button>
          </form>
        </div>
    </div>
   
  );
}

export default NewCard;