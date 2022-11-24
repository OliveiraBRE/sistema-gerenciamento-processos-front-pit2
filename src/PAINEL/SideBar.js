import React from "react";

import './SideBar.css';

const SideBar = () => {
  return <div className="side-bar">
    <div className="side-bar__title">
      <h2>Nome do Projeto</h2>
    </div>
    <div className="side-bar__info">
      <ul>
        <li><h3>data de inicio</h3></li>
        <li><h3>previsão de fim</h3></li>
        <li><h3>Porcentagem do projeto</h3></li>
      </ul>               
    </div>
  </div>
}

export default SideBar;