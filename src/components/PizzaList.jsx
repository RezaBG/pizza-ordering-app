import React from "react";
import pizzas from "../data/pizzas";
import "./PizzaList.css";

const PizzaList = () => {
  return (
    <div>
      <h1>Pizza Menu</h1>
      <ul className="pizza-list">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="pizza-item">
            <img src={pizza.image} alt={pizza.name} className="pizza-image" />
            <div className="pizza-details">
              <h2 className="pizza-name">{pizza.name}</h2>
              <p className="pizza-description">{pizza.description}</p>
              <p className="pizza-price">${pizza.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
