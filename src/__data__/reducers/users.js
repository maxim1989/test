import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { fetchUsers, success, failure } from '../actions/users';

const rawUsers = createReducer([], {
    [success.type]: (_state, action) => action.payload,
    [failure.type]: () => []
});

const isLoading = createReducer(false, {
    [fetchUsers.type]: () => true,
    [success.type]: () => false,
    [failure.type]: () => false
});

export default combineReducers({
    rawUsers,
    isLoading
});
