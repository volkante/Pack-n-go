import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import "./index.css";

// TODO 1: Footer'daki progress bar'da tamamlanınca gözüken %100'ün boyutu çok küçük. Biraz daha vurgula.
// TODO 2: Sayfa bir şekilde yenilenince listedeki elemanlar gidiyor. uselocalstorage ile bunu düzelt.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
