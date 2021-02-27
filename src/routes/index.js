import Home from "../pages/Home";
import Cart from "../pages/Cart";

const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "Cart",
    path: "/cart",
    exact: true,
    component: Cart,
  },
];

export default routes;
