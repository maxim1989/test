export const fillIndex = (str, ind, id) => {
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLocaleLowerCase();

        if (ind[letter]) {
            ind[letter].data[id] = true;
        } else {
            ind[letter] = { data: { [id]: true } }
        }

        ind = ind[letter];
    }
}

export const createIndex = (users) => {
    const nameIndex = {};
    const surnameIndex = {};
    const secondNameIndex = {};

    users.forEach(({name, surname, secondName, id}) => {
        fillIndex(name, nameIndex, id);
        fillIndex(surname, surnameIndex, id);
        fillIndex(secondName, secondNameIndex, id);
    });

    return { nameIndex, surnameIndex, secondNameIndex };
};