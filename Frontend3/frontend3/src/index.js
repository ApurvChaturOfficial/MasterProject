import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import Store from './love/bRedux/Store';
process.env.REACT_APP_ACTIVE_APP === "PersonalPortfolioApp" ? import('./index1.css') :
process.env.REACT_APP_ACTIVE_APP === "NehaPortfolioApp" ? import('./index2.css') :
process.env.REACT_APP_ACTIVE_APP === "AnushreePortfolioApp" ? import('./index3.css') : import('./index1.css')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </React.StrictMode>
);

