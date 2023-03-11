import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import CreateStore from './configureStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = CreateStore();
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
