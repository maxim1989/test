import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { saveUsersAsc, saveUsersDesc, failure, sort } from '../actions/users';

import { GRID_FIELDS } from '../../constants';

const usersSortedBySurnameAsc = createReducer([], {
    [saveUsersAsc.type]: (_state, action) => action.payload,
    [failure.type]: () => []
});

const usersSortedBySurnameDesc = createReducer([], {
    [saveUsersDesc.type]: (_state, action) => action.payload,
    [failure.type]: () => []
});

const sortBy = createReducer(GRID_FIELDS.surname, {
    [sort.type]: (_state, action) => action.payload.field
});

const direction = createReducer(false, {
    [sort.type]: (_state, action) => action.payload.reverse
})

export default combineReducers({
    usersSortedBySurnameAsc,
    usersSortedBySurnameDesc,
    sortBy,
    direction
});
