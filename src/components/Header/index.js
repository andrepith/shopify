import { useSelector } from "react-redux";

const Header = () => {
  const { cartList } = useSelector((state) => state);
  return (
    <div className="my-4 d-flex justify-content-between">
      <h1>Shopify</h1>
      <button className="btn btn-success">
        {cartList?.length} item(s) on Cart
      </button>
    </div>
  );
};

export default Header;
