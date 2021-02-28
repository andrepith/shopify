import { useState } from "react";

const Card = ({ title, id, addToCart, total = 0 }) => {
  const [count, setCount] = useState(total);
  return (
    <div className="card p-4">
      <div className="flex-grow-1">{title}</div>
      <div className="d-flex ml-auto">
        <button
          className="card card-action"
          onClick={() => setCount(count ? count - 1 : 0)}
        >
          -
        </button>
        <div className="card-action">{count}</div>
        <button
          className="card card-action"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <button
        className="card mt-2 ml-auto px-4 cursor-pointer"
        onClick={addToCart(id, count)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
