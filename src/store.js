import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './__data__/reducers/users';

export const createStore = () => configureStore({
    reducer: combineReducers({
        usersReducer
    })
});