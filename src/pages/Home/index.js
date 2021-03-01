import { useEffect } from "react";
import { connect } from "react-redux";
import { uniqBy, sortBy } from "lodash";
import Card from "../../components/Card";
import { getShopifyList, cartAddListAction } from "../../store/actions";

const Home = ({ getShopifyList, shopifyList, cartAddListAction, cartList }) => {
  const addToCart = (id, total) => () => {
    if (total) {
      cartAddListAction({
        ...shopifyList?.find((item) => item.id === id),
        total,
      });
    }
  };

  useEffect(() => {
    const fetchApi = () => {
      getShopifyList();
    };
    fetchApi();
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

export default connect(mapStateToProps, { getShopifyList, cartAddListAction })(
  Home
);
