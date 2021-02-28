import { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import { getShopifyList } from "../../store/actions";

const Home = ({ getShopifyList, shopifyList }) => {
  const addToCart = (id, total) => () => {
    // const user = { ...data.find((item) => item.id === id), total };
  };

  useEffect(() => {
    const fetchApi = () => {
      getShopifyList();
    };
    fetchApi();
  }, [getShopifyList]);

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

export default connect(mapStateToProps, { getShopifyList })(Home);
