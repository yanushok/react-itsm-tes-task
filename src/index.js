import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Routes from './app/routing/routes';
import { store } from "./app/store/configureStore";

ReactDOM.render(
    <Routes store={store} />,
    document.getElementById('root')
);

registerServiceWorker();
