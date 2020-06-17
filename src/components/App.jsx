import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { Home } from './Home';
import { UsersContainer } from './Users';

import './App.css';

export const App = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/users">
            <UsersContainer />
        </Route>
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
    </Switch>
);
