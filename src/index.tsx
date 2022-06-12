import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { IntlProvider } from 'react-intl';
// import { messages } from "./site-translation/messages";
import { Provider } from 'react-redux'
import { store } from "./store/configStore";
import LanguageProvider from "./Container/LanguageProvider";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <IntlProvider locale={"en"} messages={messages["en"]}> */}
    <Provider store={store}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
    {/* </IntlProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
