import React, { useEffect, useState } from "react";
import "./Basket.css";

const Basket = ({ basket, removeFromBasket }) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const uniqueItems = basket.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += item.price;
      } else {
        acc.push({
          id: item.id,
          name: item.name,
          quantity: 1,
          totalPrice: item.price,
        });
      }
      return acc;
    }, []);
    setItems(uniqueItems);

    // Calculate total price of all items in the basket
    const newTotalPrice = basket.reduce((total, item) => total + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [basket]);

  return (
    <div className="basket-container">
      <h2 className="basket-title">Basket</h2>
      <ul className="basket-list">
        {items.map((item, index) => (
          <li key={index} className="basket-item">
            <span>
              {item.name}: {item.quantity}x - ${item.totalPrice.toFixed(2)}
            </span>
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
