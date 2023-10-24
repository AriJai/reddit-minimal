import styles from '../features/header/Header.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function HeaderForm(){

    const [search, setSearch] = useState('');
    const handleSubmit=(e)=>{};
    return (
        <form onSubmit={handleSubmit}>
            <input 
                className={`${styles.header} ${styles.search}`}
                id="searchTerm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type='text'
                placeholder='Search'
            />
        </form>
    )
}