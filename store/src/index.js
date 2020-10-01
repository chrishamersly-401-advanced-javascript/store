import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.js';

import store from './store/';

function Main() {
  return (
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
