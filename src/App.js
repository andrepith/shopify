import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import routes from "./routes";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Router>
          <Switch>
            {routes.map((route, key) => (
              <Route
                key={`${route.path} - ${key}`}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
