import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { SearchContainer } from './Search';
import { GridContainer } from './Grid'
import { Tile } from './Tile'
import { Groups } from './Groups'

import { fetchUsers, success, failure } from '../../__data__/actions/users';
import { searchCreate, searchSave } from '../../__data__/actions/search';

import './Users.css';

const GRID = 'GRID';
const GROUPS = 'GROUPS';
const TILE = 'TILE';

export const Users = ({
    fetchUsers,
    success,
    failure,
    searchCreate,
    searchSave
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
            .then(response => {
                const data = response.payload;

                success(data);
                searchCreate(data).then(index => searchSave(index.payload));
            })
            .catch(() => failure())
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="users">
            <div className="users-search">
                <SearchContainer />
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
                {view === GRID && !loading && <GridContainer />}
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
    failure,
    searchCreate,
    searchSave
};

export const UsersContainer = connect(null, mapDispatchToProps)(Users);