import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import global_lt from './Components/language/lithuanian/global.json';
import global_en from "./Components/language/english/global.json"
import i18next from 'i18next';
import { I18nContext, I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: {escapeValue: true},
  lng: "lt",
  resources:{
      en: {
          global: global_en
      },
      lt: {
          global: global_lt
      },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
  
      <BrowserRouter>
        <App />
      </BrowserRouter>
 
  </I18nextProvider>
);
