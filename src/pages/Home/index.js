import { useEffect } from "react";
import { connect } from "react-redux";
import { uniqBy, sortBy } from "lodash";
import Card from "../../components/Card";
import { getShopifyList, cartListAction } from "../../store/actions";

const Home = ({ getShopifyList, shopifyList, cartListAction, cartList }) => {
  const addToCart = (id, total) => () => {
    if (total) {
      cartListAction({ ...shopifyList?.find((item) => item.id === id), total });
    }
  };

  useEffect(() => {
    if (!shopifyList.length) {
      const fetchApi = () => {
        getShopifyList();
      };
      fetchApi();
    }
  }, [getShopifyList, shopifyList]);

  return (
    <div className="list-items">
      {!!shopifyList.length ? (
        sortBy(uniqBy([...cartList, ...shopifyList], "id"), [
          "id",
        ])?.map((item, key) => (
          <Card key={key} {...item} addToCart={addToCart} />
        ))
      ) : (
        <div>Fetching Data ....</div>
      )}
    </div>
  );
};

const mapStateToProps = ({ shopifyList, cartList }) => ({
  shopifyList,
  cartList,
});

export default connect(mapStateToProps, { getShopifyList, cartListAction })(
  Home
);
