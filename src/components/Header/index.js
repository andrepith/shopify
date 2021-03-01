import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const Header = ({ location: { pathname } }) => {
  const { cartList } = useSelector((state) => state);
  return (
    <div className="my-4 d-flex justify-content-between">
      <h1>Shopify</h1>
      {pathname !== "/cart" && (
        <Link to="/cart" className="btn btn-success my-auto">
          Checkout {cartList?.length} item(s) on Cart
        </Link>
      )}
    </div>
  );
};

export default withRouter(Header);
