import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOMServer from 'react-dom/server'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";

import { configureStore } from "./store";
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <Provider store={configureStore({}).store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={configureStore({}).persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);

/* ReactDOMServer.renderToString(<Provider store={configureStore({}).store}>
<React.StrictMode>
  <PersistGate loading={null} persistor={configureStore({}).persistor}>
    <App />
  </PersistGate>
</React.StrictMode>
</Provider>) */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
