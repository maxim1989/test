import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const saveUsersAsc = createAction('USERS_SAVE_ASC');
export const saveUsersDesc = createAction('USERS_SAVE_DESC');
export const success = createAction('USERS_LOADED');
export const failure = createAction('USERS_FAILURE');
export const sort = createAction('USERS_SORT');
export const fetchUsers = createAsyncThunk(
    'USERS_FETCH',
    async () => {
        const response = await import('../../../server/users.json');
        
        return (await response.data);
    }
);