import { createSelector } from '@reduxjs/toolkit';

import { selectSearchIndex, selectSearchQuery } from './search';
import { groupeByGroupe, searchFilter, findDataSouce } from './utils/users';

export const selectUsersSortedBySurnameAsc = state => state.usersReducer.usersSortedBySurnameAsc;
export const selectUsersSortedBySurnameDesc = state => state.usersReducer.usersSortedBySurnameDesc;
export const selectSortBy = state => state.usersReducer.sortBy;
export const selectDirection = state => state.usersReducer.direction;
export const selectUsers = createSelector(
    [selectSearchIndex, selectSearchQuery, selectUsersSortedBySurnameAsc, selectUsersSortedBySurnameDesc, selectSortBy, selectDirection],
    (searchIndex, searchQuery, usersSortedBySurnameAsc, usersSortedBySurnameDesc, sortBy, direction) => {
        const users = findDataSouce({sortBy, usersSortedBySurnameAsc, usersSortedBySurnameDesc, direction});

        if (searchQuery.length) {
            return searchFilter(searchIndex, searchQuery, users);
        }

        return users;
    }
);
export const selectUsersByGroup = createSelector(
    [selectSearchIndex, selectSearchQuery, selectUsersSortedBySurnameAsc, selectUsersSortedBySurnameDesc, selectSortBy, selectDirection],
    (searchIndex, searchQuery, usersSortedBySurnameAsc, usersSortedBySurnameDesc, sortBy, direction) => {
        const users = findDataSouce({sortBy, usersSortedBySurnameAsc, usersSortedBySurnameDesc, direction});

        if (searchQuery.length) {
            const filteredUsers = searchFilter(searchIndex, searchQuery, users);
            
            return groupeByGroupe(filteredUsers);
        }

        return groupeByGroupe(users);
    }
);