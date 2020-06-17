import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import './Search.css';

export const Search = () => {
    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
    })

    return (
        <form className="search" onSubmit={handleFormSubmit}>
            <input type="text" className="search-query" placeholder="Type query"/>
        </form>
    )
};

export const SearchContainer = connect()(Search);