import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import Column from "./Column";

import './Painel.css';

const Painel = (props) => {
  const { cards } = useSelector(state => state);
  
  const backlog = cards[0].data.filter(card => card.status === 'backlog');
  const doing = cards[0].data.filter(card => card.status === 'doing');
  const analize = cards[0].data.filter(card => card.status === 'analize');
  const did = cards[0].data.filter(card => card.status === 'did');
  

  return (
    <Fragment>
      <SideBar headerProject={props.project} />
      <div className="columns">
        <Column column="Backlog" data={backlog} />
        <Column column="Fazendo" data={doing} />
        <Column column="Em Análise" data={analize} />
        <Column column="Feito" data={did} />
      </div>
    </Fragment>
  );
}

export default Painel;