import styles from '../features/header/Header.module.css';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearch } from '../features/content/contentSlice.js';
import { loadSubreddit, searchSubreddit, selectSearchSubreddits } from '../features/subreddit/subredditSlice.js';
import HeaderFormSubredditList from './HeaderFormSubredditList.js';

export default function HeaderForm() {
    const formRef = useRef(null)
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [inputText, setInputText] = useState('');
    const [timer, setTimer] = useState(null);
    const delay = 900;

    useEffect(() => {
        if (timer) {
            clearTimeout(timer);
        }

        const newTimer = setTimeout(() => {
            setSearch(inputText);
        }, delay);

        setTimer(newTimer);

        return () => clearTimeout(newTimer);
    }, [inputText])

    useEffect(() => {
        dispatchSubreddit();
    }, [search]);
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputText.length > 0) {
            dispatch(loadSearch({ search: inputText }))
            dispatch(loadSubreddit({ search: inputText }))
        }
    };

    const dispatchSubreddit = () => {
        dispatch(searchSubreddit({ search: search }));
    };

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubredditSearch = (subredditName) => {
        setSearch("");

        dispatch(loadSearch({ search: subredditName }))
        dispatch(loadSubreddit({ search: subredditName }))
    };


    return (
        <div className={styles.formWrap}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={`${styles.header} ${styles.search}`}
                    id="searchTerm"
                    value={inputText}
                    onChange={handleChange}
                    type='text'
                    autoComplete='off'
                    placeholder='Find a Subreddit e.g. "popular"'
                />
                <button
                    className={styles.formSubmit}
                    type='submit'
                    value="Search"
                >Search</button>
            </form>
            <div className={styles.searchIndex}>
                <HeaderFormSubredditList handleClick={handleSubredditSearch} />
            </div>
        </div>
    )
}