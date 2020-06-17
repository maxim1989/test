import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore } from './store';

import { AppContainer } from './components/App';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppContainer/>
        </Router>
    </Provider>,
    document.getElementById('root')
);