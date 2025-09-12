import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import "./index.css";

// DONE TODO 1: Footer'daki progress bar'da tamamlanınca gözüken %100'ün boyutu çok küçük. Biraz daha vurgula.
// TODO 2: Sayfa bir şekilde yenilenince listedeki elemanlar gidiyor. uselocalstorage ile bunu düzelt.
// TODO 3: Responsive - Özellikle akıllı telefonlar için ayarla.
// DONE TODO 4: Sort by description dropdown value'sünün adını sort by alphabetic order gibi bir şey yap. Anlaşılmıyor ne olduğu.
// DONE TODO 5: What do you need for your adventure'dan sonra gelen inputların arasındaki boşluk eşit değil.
// TODO 6: Input elementlerinin, buttonların, dropdown item'ların stilini değiştirmek. İnternetten hazır css btn, input stilleri bak.
// TODO 7: App'i trekking app'ine çevir, kampçılıktansa. Renkler daha uygun.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
