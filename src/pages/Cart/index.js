import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { cartRemoveListAction } from "../../store/actions";

const Cart = ({}) => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state);
  const removeItem = (data) => {
    dispatch(cartRemoveListAction(data));
  };

  const checkout = () => {};

  return (
    <div>
      <Link to="/" className="btn mb-4">
        Back to Home
      </Link>
      {cartList?.map((item, key) => (
        <div key={key} className="card mb-4 p-2">
          <Card {...item} removeItem={removeItem} isCheckOut={true} />
        </div>
      ))}
      {!!cartList?.length && (
        <div className="text-right">
          <button onClick={checkout} className="btn btn-secondary">
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
