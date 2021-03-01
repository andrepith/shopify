import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAddListAction } from "../../store/actions";

const Card = ({ title, id, removeItem = () => {}, total = 0, isCheckOut }) => {
  const dispatch = useDispatch();
  const { shopifyList } = useSelector((state) => state);
  const [count, setCount] = useState(total);
  const addToCart = (id, total) => () => {
    if (total) {
      dispatch(
        cartAddListAction({
          ...shopifyList?.find((item) => item.id === id),
          total,
        })
      );
    }
  };
  const handleRemove = () => {
    if (isCheckOut && count < 2) {
      removeItem({ id, title });
    } else {
      setCount(count ? count - 1 : 0);
    }
  };
  return (
    <div className="card p-4">
      <div className="flex-grow-1">{title}</div>
      <div className="d-flex ml-auto">
        <button className="card card-action" onClick={handleRemove}>
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
        {total ? "Update cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default Card;
