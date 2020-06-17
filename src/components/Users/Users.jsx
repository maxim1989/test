import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { Search } from './Search';
import { Grid } from './Grid'
import { Tile } from './Tile'
import { Groups } from './Groups'

import { fetchUsers, success, failure } from '../../__data__/actions/users';

import './Users.css';

const GRID = 'GRID';
const GROUPS = 'GROUPS';
const TILE = 'TILE';

export const Users = ({
    fetchUsers,
    success,
    failure
}) => {
    const [view, setView] = useState(GRID);
    const [loading, setLoading] = useState(false);
    const handleViewChange = useCallback((e) => {
        const view = e.target.getAttribute('data-view');

        setView(view);
    }, []);
    
    useEffect(() => {
        setLoading(true);
        fetchUsers()
            .then(response => success(response))
            .catch(() => failure())
            .finally(() => setLoading(false));
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
                {view === GRID && !loading && <Grid />}
                {view === TILE && !loading && <Tile />}
                {view === GROUPS && !loading && <Groups />}
                {loading && '...Loading'}
            </div>
        </div>
    )
};

const mapDispatchToProps = {
    fetchUsers,
    success,
    failure
};

export const UsersContainer = connect(null, mapDispatchToProps)(Users);