import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { cartAddListAction, cartRemoveListAction } from "../../store/actions";

const Cart = ({
  cartAddListAction,
  cartRemoveListAction,
  cartList,
  shopifyList,
}) => {
  const removeItem = (data) => {
    cartRemoveListAction(data);
  };

  const checkout = () => {};

  const addToCart = (id, total) => () => {
    if (total) {
      cartAddListAction({
        ...shopifyList?.find((item) => item.id === id),
        total,
      });
    }
  };
  return (
    <div>
      <Link to="/" className="btn mb-4">
        Back to Home
      </Link>
      {cartList?.map((item, key) => (
        <div key={key} className="card mb-4 p-2">
          <Card
            {...item}
            removeItem={removeItem}
            addToCart={addToCart}
            isCheckOut={true}
          />
        </div>
      ))}
      <div className="text-right">
        <button onClick={checkout} className="btn btn-secondary">
          Buy
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartList, shopifyList }) => ({
  cartList,
  shopifyList,
});

export default connect(mapStateToProps, {
  cartAddListAction,
  cartRemoveListAction,
})(Cart);
