import React from "react";

const listCustomer = [
  {
    id: 1,
    name: "Darlley",
    skills: ["JavaScript", "WordPress"],
  },
  {
    id: 2,
    nome: "Naruto",
    skills: ["Ninjutsu", "Taijustsu"],
  },
  {
    id: 3,
    nome: "Goku",
    skills: ["Sayajin", "Kaioken"],
  },
  {
    id: 4,
    nome: "Saitama",
    skills: ["Socos normais", "Soco sério"],
  },
];

const ListaChave = () => {
  const renderCustomer = (customer) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>
          {customer.nome}
          <ul>{customer.skills.map(renderSkills)}</ul>
        </li>
      </div>
    );
  };

  const renderSkills = (skill, index) => {
    return <li key={`skill-${index}`}>{skill}</li>;
  };

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a aula 3 parte 2.</p>
      <div>
        <ol>{listCustomer.map(renderCustomer)}</ol>
      </div>
    </div>
  );
};

export default ListaChave;
