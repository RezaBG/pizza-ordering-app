import React from "react";

const Basket = ({ basket }) => {
  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
