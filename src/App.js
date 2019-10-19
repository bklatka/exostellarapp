import React from "react";
import { createStore } from "redux";
import rootReducer from "./store";
import { Provider } from "react-redux";
import "./styles/main.scss";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import OrbitalView from "./views/orbitalView";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={() => <Redirect to={"/orbit"} />} />
        <Route path="/orbit" component={OrbitalView} />
      </Router>
    </Provider>
  );
}

export default App;
