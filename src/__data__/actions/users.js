import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const success = createAction('USERS_LOADED');
export const failure = createAction('USERS_FAILURE');
export const fetchUsers = createAsyncThunk(
    'USERS_FETCH',
    async () => {
        const response = await import('../../../server/users.json');
        
        return (await response.data);
    }
);