import React from "react";
import { createStore } from "redux";
import rootReducer from "./store";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

import "./styles/main.scss";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { EditPlanetView, NewPlanetView } from "./views/planetView";
import OrbitalView from "./views/oribtalView/orbitalView";
import StarView from "./views/starView";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Route path="/orbit" component={OrbitalView} />
          <Route exact path="/planet" component={NewPlanetView} />
          <Route exact path="/planet/:id" component={EditPlanetView} />
          <Route path="/star" component={StarView} />
          <Route exact path="/" component={() => <Redirect to={"/orbit"} />} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
