import React from "react";
import { createStore } from "redux";
import rootReducer from "./store";
import { Provider } from "react-redux";
import "./styles/main.scss";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import PlanetView from "./views/planetView";
import OrbitalView from "./views/oribtalView/orbitalView";
import StarView from "./views/starView";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/orbit" component={OrbitalView} />
        <Route path="/planet/:id?" component={PlanetView} />
        <Route path="/star" component={StarView} />
        <Route exact path="/" component={() => <Redirect to={"/orbit"} />} />
      </Router>
    </Provider>
  );
}

export default App;
