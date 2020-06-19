import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { SearchContainer } from './Search';
import { GridContainer } from './Grid'
import { TileContainer } from './Tile'
import { GroupContainer } from './Groups'

import { fetchUsers, saveUsersAsc, saveUsersDesc, failure, sort } from 'Actions/users';
import { searchCreate, searchSave } from 'Actions/search';
import { selectSortBy, selectDirection } from 'Selectors/users';

import { GRID, GROUPS, TILE } from 'Constants';

import './Users.css';

export const Users = ({
    sortBy,
    direction,
    fetchUsers,
    saveUsersAsc,
    saveUsersDesc,
    failure,
    searchCreate,
    searchSave,
    sort
}) => {
    const [view, setView] = useState(GRID);
    const [loading, setLoading] = useState(false);
    const handleViewChange = useCallback((e) => {
        const view = e.target.getAttribute('data-view');

        setView(view);
    }, []);
    const handleSort = useCallback((e) => {
        const sortButton = e.target.getAttribute('data-field');
        const sortDirection = e.target.getAttribute('data-direction');
        const reverse = sortDirection === 'true';

        sort({field: sortBy, reverse: sortBy === sortButton ? !reverse : false});
    }, [sortBy]);
    
    useEffect(() => {
        setLoading(true);
        fetchUsers()
            .then(response => {
                const data = response.payload;
                const dataAsc = data.sort((a, b) => a.surname > b.surname ? 1 : -1);

                saveUsersAsc(dataAsc);
                saveUsersDesc([...dataAsc].reverse());
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
            <div className="users-sort">
                <button className="users-sort-by-surname"
                        data-field={sortBy}
                        data-direction={direction}
                        onClick={handleSort}
                >
                    Sort by surname ({direction ? 'ASC' : 'DESC'})
                </button>
            </div>
            <div className="users-content">
                {view === GRID && !loading && <GridContainer />}
                {view === TILE && !loading && <TileContainer />}
                {view === GROUPS && !loading && <GroupContainer />}
                {loading && '...Loading'}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    sortBy: selectSortBy(state),
    direction: selectDirection(state)
});

const mapDispatchToProps = {
    fetchUsers,
    saveUsersAsc,
    saveUsersDesc,
    failure,
    searchCreate,
    searchSave,
    sort
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);