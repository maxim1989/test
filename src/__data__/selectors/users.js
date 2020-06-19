import { createSelector } from '@reduxjs/toolkit';

import { selectSearchIndex, selectSearchQuery } from './search';
import { groupeByGroupe, searchFilter } from './utils/users';

export const selectUsers = state => state.usersReducer.users;
export const selectFilteredUsers = createSelector(
    [selectSearchIndex, selectSearchQuery, selectUsers],
    (searchIndex, searchQuery, users) => {
        if (searchQuery.length) {
            return searchFilter(searchIndex, searchQuery, users);
        }

        return users;
    }
);
export const selectFilteredUsersByGroup = createSelector(
    [selectSearchIndex, selectSearchQuery, selectUsers],
    (searchIndex, searchQuery, users) => {
        if (searchQuery.length) {
            const filteredUsers = searchFilter(searchIndex, searchQuery, users);
            
            return groupeByGroupe(filteredUsers);
        }

        return groupeByGroupe(users);
    }
);