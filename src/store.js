import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './__data__/reducers/users';
import searchReducer from './__data__/reducers/search';

export const createStore = () => configureStore({
    reducer: combineReducers({
        usersReducer,
        searchReducer
    })
});