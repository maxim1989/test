export const fillIndex = (str, ind, id) => {
    for (let i = 0; i < str.length; i++) {
        if (ind[str[i]]) {
            ind[str[i]].data[id] = true;
        } else {
            ind[str[i]] = { data: { [id]: true } }
        }

        ind = ind[str[i]];
    }
}

export const createIndex = (users) => {
    console.log(users)
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