import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next'
import i18next from "i18next"
import global_es from './Translations/es/global.json'
import global_en from './Translations/en/global.json'

function idioma() {

  if (window.localStorage.lg === undefined) {
    window.localStorage.setItem("lg", 'es');
    return window.localStorage.getItem('lg');
  }

  else return window.localStorage.getItem('lg');
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: idioma(),
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    }
  }
}
);

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
