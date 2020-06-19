import React from 'react';
import { connect } from 'react-redux';

import { selectUsers } from 'Selectors/users';

import './Grid.css';

export const Grid = ({ data }) => (
    <div className="grid">
        <div className="grid-header">
            <div className="grid-header-column">id</div>
            <div className="grid-header-column">Имя</div>
            <div className="grid-header-column">Фамилия</div>
            <div className="grid-header-column">Отчество</div>
            <div className="grid-header-column">Группа</div>
        </div>
        <div className="grid-content">
            {data.map(({ id, name, surname, secondName, group}) => <div className="grid-content-row" key={id}>
                <div className="grid-content-column">{id}</div>
                <div className="grid-content-column">{surname}</div>
                <div className="grid-content-column">{name}</div>
                <div className="grid-content-column">{secondName}</div>
                <div className="grid-content-column">{group}</div>
            </div>)}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    data: selectUsers(state)
});

export const GridContainer = connect(mapStateToProps)(Grid);
