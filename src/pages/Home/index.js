import { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import { getShopifyList, cartListAction } from "../../store/actions";

const Home = ({ getShopifyList, shopifyList, cartListAction }) => {
  const addToCart = (id, total) => () => {
    if (total) {
      cartListAction({ ...shopifyList?.find((item) => item.id === id), total });
    }
  };

  useEffect(() => {
    const fetchApi = () => {
      getShopifyList();
    };
    if (!shopifyList.length) {
      fetchApi();
    }
  }, [getShopifyList, shopifyList]);

  return (
    <div className="list-items">
      {!!shopifyList.length ? (
        shopifyList?.map((item, key) => (
          <Card key={key} {...item} addToCart={addToCart} />
        ))
      ) : (
        <div>Fetching Data ....</div>
      )}
    </div>
  );
};

const mapStateToProps = ({ shopifyList }) => ({ shopifyList });

export default connect(mapStateToProps, { getShopifyList, cartListAction })(
  Home
);
