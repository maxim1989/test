import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import { searchQuery } from '../../../__data__/actions/search';

import './Search.css';

const debouncedSearchQuery = debounce((action, payload) => action(payload), 300);

export const Search = ({
    searchQuery
}) => {
    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
    }, [])

    const handleOnChange = useCallback((e) => {
        debouncedSearchQuery(searchQuery, e.target.value);
    }, []);

    return (
        <form className="search" onSubmit={handleFormSubmit}>
            <input type="text"
                className="search-query"
                placeholder="Type query"
                onChange={handleOnChange}
            />
        </form>
    )
};

const mapDispatchToProps = {
    searchQuery
};

export const SearchContainer = connect(null, mapDispatchToProps)(Search);
