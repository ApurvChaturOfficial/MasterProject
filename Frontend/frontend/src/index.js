import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './love/bRedux/Store';
import environmentVariable from './love/dFunction/fEnvironmentVariable';
const App1 = React.lazy(() => import('./app/App1'));
const App2 = React.lazy(() => import('./app/App2'));
const App3 = React.lazy(() => import('./app/App3'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      {(environmentVariable.ACTIVE_APP === "") && <App1 />}
      {(environmentVariable.ACTIVE_APP === "") && <App2 />}
      {(environmentVariable.ACTIVE_APP === "PersonalPortfolioApp") && <App3 />}
    </Provider>
  </React.StrictMode>
);
