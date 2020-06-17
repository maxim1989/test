import React from 'react';
import { connect } from 'react-redux';

import { selectFilteredUsers } from '../../../__data__/selectors/users';

import './Grid.css';

export const Grid = ({ data }) => (
    <div className="grid">
        <div className="grid-header">
            <div className="grid-header_column">id</div>
            <div className="grid-header_column">Имя</div>
            <div className="grid-header_column">Фамилия</div>
            <div className="grid-header_column">Отчество</div>
            <div className="grid-header_column">Группа</div>
        </div>
        <div className="grid-content">
            {data.map(({ id, name, surname, secondName, group}) => <div className="grid-content_row" key={id}>
                <div className="grid-content_column">{id}</div>
                <div className="grid-content_column">{name}</div>
                <div className="grid-content_column">{surname}</div>
                <div className="grid-content_column">{secondName}</div>
                <div className="grid-content_column">{group}</div>
            </div>)}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    data: selectFilteredUsers(state)
});

export const GridContainer = connect(mapStateToProps)(Grid);
