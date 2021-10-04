import React from "react";

const listCustomer = [
  {
    id: 1,
    name: "Darlley",
    skills: ["JavaScript", "WordPress"],
  },
  {
    id: 2,
    name: "Naruto",
    skills: ["Ninjutsu", "Taijustsu"],
  },
  {
    id: 3,
    name: "Goku",
    skills: ["Sayajin", "Kaioken"],
  },
  {
    id: 4,
    name: "Saitama",
    skills: ["Socos normais", "Soco sério"],
  },
];

const Evento = () => {
  const handleClick = (e, id) => {
    console.log("deletar cliente");
    alert(`ID do cliente: ${id}`);
  };

  const renderCustomers = (customer) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>
          {customer.name}{" "}
          <button onClick={(e) => handleClick(e, customer.id)}>
            Deletar Cliente x
          </button>
        </li>
        {customer.skills.map(renderSkills)}
      </div>
    );
  };

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: "30px" }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    );
  };

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>{listCustomer.map(renderCustomers)}</ul>
      </div>
    </div>
  );
};
export default Evento;
