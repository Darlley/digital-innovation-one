import React from "react";
import Evento from "./aulas/Eventos";
import ListaChave from "./aulas/ListaChave";
import Cliente from "./aulas/RederizacaoCondicional";

const btn_A = <button>Ok</button>;
const btn_B = <button>Enviar</button>;


const App = () => {
  return (
    <div>
      <h1>Digital Innovation One</h1>
      <p>Darlley Brasil de Brito Furtado</p>
      {btn_A}
      {btn_B}

      <h2>AULA 01 - Renderização condicional</h2>
      <Cliente />

      <h2>AULA 02 - Listas e Chaves</h2>
      <ListaChave />

      <h2>AULA 03 - Mnipulando Eventos</h2>
      <Evento />
    </div>
  );
};

export default App;
