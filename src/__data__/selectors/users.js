import { createSelector } from '@reduxjs/toolkit';

import { selectSearchIndex, selectSearchQuery } from './search';
import { findNextSource } from './utils/users';

export const selectUsers = state => state.usersReducer.users;
export const selectFilteredUsers = createSelector(
    [selectSearchIndex, selectSearchQuery, selectUsers],
    (searchIndex, searchQuery, users) => {
        if (searchQuery.length) {
            let { nameIndex, surnameIndex, secondNameIndex } = searchIndex;

            for (let i = 0; i < searchQuery.length; i++) {
                const letter = searchQuery[i].toLocaleLowerCase();

                nameIndex = findNextSource(nameIndex, letter);
                surnameIndex = findNextSource(surnameIndex, letter);
                secondNameIndex = findNextSource(secondNameIndex, letter);
            }

            const showUsers = { ...nameIndex.data, ...surnameIndex.data, ...secondNameIndex.data };

            return users.filter(u => showUsers[u.id]);
        }

        return users;
    }
);