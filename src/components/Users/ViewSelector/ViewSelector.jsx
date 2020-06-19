import React from 'react';

import { GRID, GROUPS, TILE } from 'Constants';

import './ViewSelector.css';

export const ViewSelector = ({view, onClick}) => (
    <div className="viewselect">
        <button className="viewselect-nav_grid"
            data-view={GRID}
            disabled={view === GRID}
            onClick={onClick}
        >
            Show Grid
        </button>
        <button className="viewselect-nav_groups"
            data-view={GROUPS}
            disabled={view === GROUPS}
            onClick={onClick}
        >
            Show Groups
        </button>
        <button className="viewselect-nav_tile"
            data-view={TILE}
            disabled={view === TILE}
            onClick={onClick}
        >
            Show Tile
        </button>
    </div>
);
