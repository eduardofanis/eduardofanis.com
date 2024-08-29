import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import "./index.css";

import { getUserLocale } from "get-user-locale";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import global_en from "./translations/en-US/global.json";
import global_ptBR from "./translations/pt-BR/global.json";

const language = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : getUserLocale();

const defaultLanguage =
  language == "en-US" ? "en-US" : language == "pt-BR" ? "pt-BR" : "en-US";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: defaultLanguage,
  resources: {
    "en-US": {
      global: global_en,
    },
    "pt-BR": {
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
