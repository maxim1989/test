import React, { useState, useCallback } from 'react';

import { Search } from './Search';
import { Grid } from './Grid'
import { Tile } from './Tile'
import { Groups } from './Groups'

import './Users.css';

const GRID = 'GRID';
const GROUPS = 'GROUPS';
const TILE = 'TILE';

export const Users = () => {
    const [view, setView] = useState(GRID);
    const handleViewChange = useCallback((e) => {
        const view = e.target.getAttribute('data-view');

        setView(view);
    }, []);

    return (
        <div className="users">
            <div className="users-search">
                <Search />
            </div>
            <nav className="users-nav">
                <button className="users-nav_grid"
                        data-view={GRID}
                        disabled={view === GRID}
                        onClick={handleViewChange}
                >
                    Show Grid
                </button>
                <button className="users-nav_groups"
                        data-view={GROUPS}
                        disabled={view === GROUPS}
                        onClick={handleViewChange}
                >
                    Show Groups
                </button>
                <button className="users-nav_tile"
                        data-view={TILE}
                        disabled={view === TILE}
                        onClick={handleViewChange}
                >
                    Show Tile
                </button>
            </nav>
            <div className="users-content">
                {view === GRID && <Grid />}
                {view === TILE && <Tile />}
                {view === GROUPS && <Groups />}
            </div>
        </div>
    )
};
