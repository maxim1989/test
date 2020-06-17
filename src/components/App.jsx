import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { Home } from './Home';
import { Users } from './Users';

import { fetchUsers, success, failure } from '../__data__/actions/users';

import './App.css';

export const App = ({
    fetchUsers,
    success,
    failure
}) => {
    useEffect(() => {
        fetchUsers()
            .then(response => success(response))
            .catch(() => failure());
    }, []);

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route render={() => <Redirect to={{ pathname: '/' }} />} />
        </Switch>
    );
}

const mapDispatchToProps = {
    fetchUsers,
    success,
    failure
};

export const AppContainer = connect(null, mapDispatchToProps)(App);