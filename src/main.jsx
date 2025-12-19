import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";  // مهم جداً
import { store } from "../store/store.js"; 
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
