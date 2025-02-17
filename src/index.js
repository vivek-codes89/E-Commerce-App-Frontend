import React from "react";
import { createRoot } from "react-dom/client"; // ✅ React 18 import
import { Provider } from "react-redux";
import store from "./store/store"
import "./styles/index.css";
import App from "./App";

const root = document.getElementById("root");

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
