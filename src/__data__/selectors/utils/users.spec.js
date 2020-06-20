import { GRID_FIELDS } from 'Constants';
import {findNextSource, searchFilter, groupeByGroupe, findDataSouce} from './users';

test('findNextSource - letter exist', () => {
    expect(findNextSource({ n: {data: {1: true}}}, 'n')).toEqual({data: {1: true}});
});

test('findNextSource - letter not exist', () => {
    expect(findNextSource({}, 'n')).toEqual({});
});

test('searchFilter', () => {
    expect(searchFilter({
        nameIndex: {q: {data: {1: true}}},
        surnameIndex: {a: {data: {2: true}}},
        secondNameIndex: {b: {data: {3: true}}}
    },
    'q',
    [{id: 1}, {id: 2}, {id: 3}])).toEqual([{id: 1}]);
});

test('groupeByGroupe', () => {
    expect(groupeByGroupe([{
        id: 1,
        group: 1
    }, {
        id: 2,
        group: 1
    }, {
        id: 3,
        group: 2
    }, {
        id: 4,
        group: 1
    }])).toEqual([{
        data: [{
            id: 1,
            group: 1
        }, {
            id: 2,
            group: 1
        }, {
            id: 4,
            group: 1
        }],
        name: 1
    }, {
        data: [{
            id: 3,
            group: 2
        }],
        name: 2
    }]);
});

test('findDataSouce - empty', () => {
    expect(findDataSouce({sortBy: 'unknownField', direction: false, usersSortedBySurnameAsc: [1], usersSortedBySurnameDesc: [2]})).toEqual([]);
});

test('findDataSouce - DESC', () => {
    expect(findDataSouce({sortBy: GRID_FIELDS.surname, direction: true, usersSortedBySurnameAsc: [1], usersSortedBySurnameDesc: [2]})).toEqual([2]);
});

test('findDataSouce - ASC', () => {
    expect(findDataSouce({sortBy: GRID_FIELDS.surname, direction: false, usersSortedBySurnameAsc: [1], usersSortedBySurnameDesc: [2]})).toEqual([1]);
});