import styles from '../features/header/Header.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadSearch } from '../features/content/contentSlice.js';

export default function HeaderForm(){
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(search.length > 0){
            dispatch(loadSearch({search: search}))
        }
    };
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                className={`${styles.header} ${styles.search}`}
                id="searchTerm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type='text'
                placeholder='Find a Subreddit'
            />
        </form>
    )
}