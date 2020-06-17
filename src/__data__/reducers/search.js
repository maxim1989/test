import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { searchSave } from '../actions/search';

const searchIndex = createReducer({}, {
    [searchSave.type]: (_state, action) => action.payload
});

export default combineReducers({
    searchIndex
});
