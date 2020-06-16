import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUsers, success, failure } from '../__data__/actions/users';

import './App.css';

export const App = ({
    fetchUsers,
    success,
    failure
}) => {
    useEffect(() => {
        fetchUsers()
            .then(response => success(response.payload.data))
            .catch(() => failure());
    }, []);

    return (
        <h1>Hello, world!</h1>
    );
}

const mapDispatchToProps = {
    fetchUsers,
    success,
    failure
};

export const AppContainer = connect(null, mapDispatchToProps)(App);