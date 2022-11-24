import React from "react";

import './Column.css';

const Column = (props) => {
  return (
    <div className="column">
      <div className="column-title"><h3>{props.title}</h3></div>
      <ul className="column-cards">
        <li className="column-cards_card">Card #01</li>
        <li className="column-cards_card">Card #02</li>
        <li className="column-cards_card">Card #03</li>
      </ul>
    </div>
  );
}

export default Column;