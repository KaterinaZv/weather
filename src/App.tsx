import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import configureStore from './store/store';

import ApplicationRouter from './components/modules/router';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ApplicationRouter />
    </Provider>
  );
}

export default App;
