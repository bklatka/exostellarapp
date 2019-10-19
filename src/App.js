import React from "react";
import { createStore } from "redux";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
import TestComponent from "./components/testComponent/testComponent";
import "./styles/main.scss";
import PlanetTemperature from "./components/planetTemperature/planetTemperature";
import AppLayout from "./components/AppLayout/AppLayout";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <h1>Hello</h1>
        <PlanetTemperature />
        <TestComponent />
      </AppLayout>
    </Provider>
  );
}

export default App;
