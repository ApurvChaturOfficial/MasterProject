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
      {(process.env.REACT_APP_ACTIVE_APP === "SampleAuthenticationApp") && <App1 />}
      {(process.env.REACT_APP_ACTIVE_APP === "SampleAdministrationApp") && <App2 />}
      {(
        process.env.REACT_APP_ACTIVE_APP === "PersonalPortfolioApp" || 
        process.env.REACT_APP_ACTIVE_APP === "SofiePortfolioApp" || 
        process.env.REACT_APP_ACTIVE_APP === "AnushreePortfolioApp"
      ) && <App3 />}
    </Provider>
  </React.StrictMode>
);
