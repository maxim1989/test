import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { createIndex } from './utils/search';

export const searchSave = createAction('SEARCH_SAVE');
export const searchQuery = createAction('SEARCH_QUERY');
export const searchCreate = createAsyncThunk(
    'SEARCH_CREATE',
    async (payload) => {
        const data = createIndex(payload);
        
        return (await data);
    }
);
