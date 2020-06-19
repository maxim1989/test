import React from 'react';

import './SortBar.css';

export const SortBar = ({sortBy, direction, onClick}) => (
    <div className="sortbar">
        <button className="sortbar-sort-by-surname"
            data-field={sortBy}
            data-direction={direction}
            onClick={onClick}
        >
            Sort by surname ({direction ? 'ASC' : 'DESC'})
        </button>
    </div>
);
