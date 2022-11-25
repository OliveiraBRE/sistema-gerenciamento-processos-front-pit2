import React from "react";
import Card from "./Card";

import './Column.css';

const Column = (props) => {
  return (
    <div className="column">
      <div className="column-title"><h3>{props.title}</h3></div>
      <ul className="column-cards">
        <Card>Card #01</Card>
        <Card>Card #02</Card>
        <Card>Card #03</Card>
      </ul>
    </div>
  );
}

export default Column;