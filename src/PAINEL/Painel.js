import React, { Fragment } from "react";
import SideBar from "./SideBar";
import Column from "./Column";

import './Painel.css';

const Painel = () => {
  return (
    <Fragment>
      <SideBar />
      <div className="columns">
        <Column title="Backlog" />
        <Column title="Fazendo" />
        <Column title="Em Análise" />
        <Column title="Feito" />
      </div>
    </Fragment>
  );
}

export default Painel;