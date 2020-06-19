import React from 'react';

import './Content.css';

export const Content = ({ data }) => (
    <div className="content">
        <ul className="content-list">
            {data.map(user =>
                <li className="content-list-item" key={user.id}>
                    <p className="content-list-item-name">{user.name}</p>
                    <p className="content-list-item-surname">{user.surname}</p>
                    <p className="content-list-item-secondName">{user.secondName}</p>
                    <p className="content-list-item-id">{user.id}</p>
                </li>
            )}
        </ul>
    </div>
);
