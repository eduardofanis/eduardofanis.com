import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import global_en from "./translations/en/global.json";
import global_ptBR from "./translations/pt-BR/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

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
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
