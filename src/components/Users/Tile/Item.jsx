import React from 'react';

import './Item.css';

export const Item = ({user: {id, name, surname, secondName, group}}) => (
    <div className="item">
        <p className="item-fio">{`${surname}, ${name}, ${secondName}`}</p>
        <p className="item-info">{`${id}, ${group}`}</p>
    </div>    
);
