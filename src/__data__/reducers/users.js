import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { saveUsersAsc, saveUsersDesc, failure, updateSortField, updateSortDirection } from '../actions/users';

import { GRID_FIELDS } from 'Constants';

const usersSortedBySurnameAsc = createReducer([], {
    [saveUsersAsc.type]: (_state, action) => action.payload,
    [failure.type]: () => []
});

const usersSortedBySurnameDesc = createReducer([], {
    [saveUsersDesc.type]: (_state, action) => action.payload,
    [failure.type]: () => []
});

const sortBy = createReducer(GRID_FIELDS.surname, {
    [updateSortField.type]: (_state, action) => action.payload
});

const direction = createReducer(false, {
    [updateSortDirection.type]: (_state, action) => action.payload
});

export default combineReducers({
    usersSortedBySurnameAsc,
    usersSortedBySurnameDesc,
    sortBy,
    direction
});
