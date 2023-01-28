import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <HashRouter basename={process.env.PUBLIC_URL} >
                <Provider store={store} >
                    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
                </Provider>
            </HashRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())

reportWebVitals();
