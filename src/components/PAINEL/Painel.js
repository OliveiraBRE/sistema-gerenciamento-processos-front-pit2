import React, { Fragment } from "react";
import SideBar from "./SideBar";
import Column from "./Column";

import './Painel.css';

const Painel = (props) => {
  const backlog = [
    {
      title: "peças azuis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    },
    {
      title: "peças vermelhas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    }
  ];

  const doing = [
    {
      title: "peças pretas",
      description: "Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    }
  ];

  const analize = [
    {
      title: "peças brancas",
      description: "Duis aute irure dolor in reprehenderit sunt in culpa qui officia deserunt mollit anim id est laborum",
    }
  ];

  const did = [
    {
      title: "tabuleiro",
      description: "Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      title: "dados",
      description: "Lorem ipsum dolor sit amet, consectetur  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      title: "cartas",
      description: "Lorem ipsum dolor sit amet, c ullamco laboris nisi ut aliquip ex ea commodo consequat",
    }
  ];



return (
    <Fragment>
      <SideBar headerProject={props.project}/>
      <div className="columns">
        <Column title="Backlog" data={backlog}/>
        <Column title="Fazendo" data={doing}/>
        <Column title="Em Análise" data={analize}/>
        <Column title="Feito" data={did}/>
      </div>
    </Fragment>
  );
}

export default Painel;