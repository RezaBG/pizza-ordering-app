import React from "react";
import "./Basket.css";

const Basket = ({ basket, removeFromBasket }) => {
  const totalPrice = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div className="basket-container">
      <h2 className="basket-title">Basket</h2>
      <ul className="basket-list">
        {basket.map((item, index) => (
          <li key={index} className="basket-item">
            {item.name} - ${item.price}
            <button
              className="remove-button"
              onClick={() => removeFromBasket(item)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Basket;
