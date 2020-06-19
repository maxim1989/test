import React from 'react';
import { connect } from 'react-redux';

import { selectUsersByGroup } from '../../../__data__/selectors/users';

import { Content } from './Content';

import './Groups.css';

export const Groups = ({ data }) => (
    <div className="groups">
        <ul className="groups-list">
            {data.map(group =>
                <li className="group-list-item" key={group.name}>
                    <p className="group-list-item-title">{group.name || 'Другие'}</p>
                    <Content data={group.data} />
                </li>
            )}
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    data: selectUsersByGroup(state)
});

export const GroupContainer = connect(mapStateToProps)(Groups);
