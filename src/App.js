import React from 'react';
import './App.css';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux'
import TestComponent from './components/testComponent/testComponent';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <TestComponent />
    </div>
      </Provider>
  );
}

export default App;
