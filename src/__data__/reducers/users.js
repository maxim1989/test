import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { success, failure } from '../actions/users';

const users = createReducer([], {
    [success.type]: (_state, action) => action.payload,
    [failure.type]: () => []
});

export default combineReducers({
    users
});
