import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import "./index.css";

// TODO 1: Responsive - Özellikle akıllı telefonlar için ayarla.
// TODO 2: Input elementlerinin, buttonların, dropdown item'ların stilini değiştirmek. İnternetten hazır css btn, input stilleri bak.
//  ?? TODO 3: App'i trekking app'ine çevir, kampçılıktansa. Renkler daha uygun.
// TODO 4: Readme oluştur.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
