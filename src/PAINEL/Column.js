import React from "react";
import Card from "../UI/Card";

import './Column.css';

const Column = (props) => {
  return (
    <div className="column">
      <div className="column-title"><h3>{props.title}</h3></div>
      <ul className="column-cards">
        {props.data.map(data => (
          <li>
            <Card>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Column;