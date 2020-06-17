import React from 'react';
import { connect } from 'react-redux';

import { Item } from './Item';

import { selectFilteredUsers } from '../../../__data__/selectors/users';

import './Tile.css';

export const Tile = ({ data }) => (
    <div className="tile">
        <ul className="tile-content">
            {data.map(user => <li className="tile-item">
                <Item user={user} key={user.id}/>
            </li>)}
        </ul>
    </div>
)

const mapStateToProps = (state) => ({
    data: selectFilteredUsers(state)
});

export const TileContainer = connect(mapStateToProps)(Tile);