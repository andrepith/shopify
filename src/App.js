import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
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
  );
}

export default App;
