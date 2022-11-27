import React from "react";
import { NavLink } from 'react-router-dom';

import './SideBar.css';

const SideBar = (props) => {


  return <div className="side-bar">
    <div className="side-bar__title">
      <div className="side-bar__title__nav">
      <NavLink className="nav" to="/">
        <h3>HOME</h3>
        </NavLink>
      <NavLink className="nav" to={`/new_card/${props.headerProject.name}`}>
        <h3>NOVO</h3>
        </NavLink>
      </div>
      <h1>{props.headerProject.name}</h1>
    </div>
    <div className="side-bar__info">
      <ul>
        <li>
          <h4>data de inicio</h4>
          <h5>{props.headerProject.date}</h5>
        </li>
        <li>
          <h4>Porcentagem do projeto</h4>
          <h5>12%</h5>
        </li>
      </ul>
    </div>
  </div>
}

export default SideBar;