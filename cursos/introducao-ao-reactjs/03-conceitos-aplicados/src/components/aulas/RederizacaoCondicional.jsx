import React from "react";

const btn1 = <button>Histórico dos Clientes</button>;
const btn2 = <button>Cadastrar Cliente</button>;

const hasCustomer = true;

const Cliente = () => {
  const renderShowHistory =
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />
      {btn1}
    </div>
  ;

  const renderAddCustomer = 
    <div>
      Clique abaixo para cadastrar o cliente
      <br />
      {btn2}
    </div>
  ;

  const showCustomer = () => {
    if (!hasCustomer) return null;

    return (
      <div>
        <p>Nome do Cliente: Darlley Brito</p>
      </div>
    );
  };

  console.log("hasCustomer", hasCustomer);

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a aula 3.</p>
      {hasCustomer ? renderShowHistory : renderAddCustomer}
      <div>{showCustomer()}</div>
    </div>
  );
};
export default Cliente;
