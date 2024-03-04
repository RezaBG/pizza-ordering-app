import React, { useState } from "react";
import pizzas from "../data/pizzas";
import Basket from "./Basket";
import "./PizzaList.css";

const PizzaList = () => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (pizza) => {
    setBasket([...basket, pizza]);
  };

  const removeFromBasket = (pizzaToRemove) => {
    const newBasket = basket.filter((pizza) => pizza.id !== pizzaToRemove.id);
    setBasket(newBasket);
  };

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
              <button onClick={() => addToBasket(pizza)}>Add to Basket</button>
            </div>
          </li>
        ))}
      </ul>
      <Basket basket={basket} removeFromBasket={removeFromBasket} />
    </div>
  );
};

export default PizzaList;
