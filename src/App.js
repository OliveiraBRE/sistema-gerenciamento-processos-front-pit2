import React from "react";
import ProjectList from "./PROJECT/ProjectList";
import Painel from "./PAINEL/Painel";

const projects = [
  {name: "Card Game", id: 1, date: '01/11/22', description: "Primeiro projeto cadastrado"},
  {name: "Board Game", id: 2, date: '10/12/22', description: "Segundo projeto cadastrado"},
  {name: "Video Game", id: 3, date: '30/02/23', description: "Terceiro projeto cadastrado"}
];

function App() {
  return (
    <div>
      {/* <ProjectList projects={projects}/> */}
      <Painel />
    </div>
  );
}

export default App;
