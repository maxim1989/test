import React from 'react';
import { connect } from 'react-redux';

import { Item } from './Item';

import { selectUsers } from 'Selectors/users';

import './Tile.css';

export const Tile = ({ data }) => (
    <div className="tile">
        <ul className="tile-content">
            {data.map(user => <li className="tile-item" key={user.id}>
                <Item user={user}/>
            </li>)}
        </ul>
    </div>
)

const mapStateToProps = (state) => ({
    data: selectUsers(state)
});

export const TileContainer = connect(mapStateToProps)(Tile);