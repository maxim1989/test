import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { searchSave, searchQuery } from '../actions/search';

const searchIndex = createReducer({}, {
    [searchSave.type]: (_state, action) => action.payload
});

const query = createReducer('', {
    [searchQuery.type]: (_state, action) => action.payload
});

export default combineReducers({
    searchIndex,
    query
});
