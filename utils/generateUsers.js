const response = {
    data: []
};
const groups = ['Руководство', 'Бухгалтерия', 'Отдел кадров', '', 'Группа разработки', 'Уборщик'];

const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);

    return Math.round(rand);
};

for (let i = 1; i <= 1000; i++) {
    response.data.push({
        id: i,
        name: `UserName ${i}`,
        surname: `UserSurname ${i}`,
        secondName: `UserSecondName ${i}`,
        group: groups[randomInteger(0, 5)]
    });
}

const json = JSON.stringify(response);

const fs = require('fs');
fs.writeFile('./server/users.json', json, 'utf8', (f) => f);
