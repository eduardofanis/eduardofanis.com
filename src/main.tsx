import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import global_en from "./translations/en/global.json";
import global_ptBR from "./translations/pt-BR/global.json";

const language = localStorage.getItem("language");

const defaultLanguage =
  language == "en" ? "en" : language == "ptBR" ? "ptBR" : "en";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: defaultLanguage,
  resources: {
    en: {
      global: global_en,
    },
    ptBR: {
      global: global_ptBR,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
