// import React from 'react'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor = {persistor}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </PersistGate>
  </Provider>
);
