'use client';
import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder = 'Search...', onSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(keyword.trim());
        }
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input
                type="text"
                className={styles.searchInput}
                placeholder={placeholder}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" className={styles.searchButton}>
                <i className="fa-brands fa-searchengin"></i>
            </button>
        </form>
    );
};

export default SearchBar;
