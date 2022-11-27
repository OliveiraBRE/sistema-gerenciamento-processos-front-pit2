import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { deleteCardById } from "../../store/cards";


import './Column.css';

const Column = (props) => {
  const dispatch = useDispatch();

  const clog = () => {
    if(window.confirm(`Deseja deletar o card ${props.data[0].title}`)){
      dispatch(deleteCardById(props.data[0].cardId));
    }
  }

  return (
    <div className="column">
      <div className="column-title">
        <h3>{props.column}</h3>
      </div>
      <ul className="column-cards">
        {props.data.map(data => (
          <li key={data.cardId}>
            <Card>
              <h3>{data.title}</h3>
              <Button className="xizinho" onClick={clog}>X</Button>
              <p>{data.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Column;