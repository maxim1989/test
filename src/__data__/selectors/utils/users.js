import { GRID_FIELDS } from '../../../constants';

export const findNextSource = (index, letter) => {
    if (index[letter]) {
        return index[letter]
    }

    return {}
}

export const searchFilter = (searchIndex, searchQuery, users) => {
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

export const groupeByGroupe = (users) => {
    const groups = {};
    const groupedUsers = [];
    let counter = 0;

    users.forEach(u => {
        const positionIndex = groups[u.group];

        if (positionIndex) {
            groupedUsers[positionIndex - 1].data.push(u);
        } else {
            counter += 1;
            groups[u.group] = counter;
            groupedUsers.push({data: [u], name: u.group});
        }
    })

    return groupedUsers;
}

export const findDataSouce = ({sortBy, direction, usersSortedBySurnameAsc, usersSortedBySurnameDesc}) => {
    if (sortBy === GRID_FIELDS.surname) {
        return direction ? usersSortedBySurnameDesc : usersSortedBySurnameAsc;
    }

    return [];
}
