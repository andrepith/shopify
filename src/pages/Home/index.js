import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uniqBy, sortBy } from "lodash";
import Card from "../../components/Card";
import { getShopifyList } from "../../store/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { shopifyList, cartList } = useSelector((state) => state);

  const fetchApi = useCallback(() => {
    dispatch(getShopifyList());
  }, [dispatch]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <div className="list-items">
      {!!shopifyList.length ? (
        sortBy(uniqBy([...cartList, ...shopifyList], "id"), [
          "id",
        ])?.map((item, key) => <Card key={key} {...item} />)
      ) : (
        <div>Fetching Data ....</div>
      )}
    </div>
  );
};

export default Home;
