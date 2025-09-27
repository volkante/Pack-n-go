import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import "./index.css";

// TODO 2: Sayfa bir şekilde yenilenince listedeki elemanlar gidiyor. localstorage ile bunu düzelt.
// TODO 3: Responsive - Özellikle akıllı telefonlar için ayarla.
// TODO 6: Input elementlerinin, buttonların, dropdown item'ların stilini değiştirmek. İnternetten hazır css btn, input stilleri bak.
//  ?? TODO 7: App'i trekking app'ine çevir, kampçılıktansa. Renkler daha uygun.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
