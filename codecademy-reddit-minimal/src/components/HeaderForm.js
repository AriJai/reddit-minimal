import styles from '../features/header/Header.module.css';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearch } from '../features/content/contentSlice.js';
import { loadSubreddit, searchSubreddit, selectSearchSubreddits } from '../features/subreddit/subredditSlice.js';
import HeaderFormSubredditList from './HeaderFormSubredditList.js';

export default function HeaderForm() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const timeoutRef = useRef(null);
    const [subredditList, setSubredditList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const subredditsfromSearch = useSelector(selectSearchSubreddits);

    useEffect(() => {
        if (subredditsfromSearch && search.length > 0) {
            setIsLoaded(true);
            setSubredditList(subredditsfromSearch);
        } else {
            setIsLoaded(false);
        }
    }, [subredditsfromSearch])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length > 0) {
            dispatch(loadSearch({ search: search }))
            dispatch(loadSubreddit({ search: search }))
        }
    };
    const dispatchSubreddit = (text) => {
        dispatch(searchSubreddit({ search: text }));
    };


    const handleSearch = (text) => {
        setSearch(text);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            dispatchSubreddit(search);
        }, 1200);
    };

    const handleSubredditSearch = (subredditName) => {
        setSearch("");
        clearTimeout(timeoutRef.current);
        setSubredditList([]);
        dispatch(loadSearch({ search: subredditName }))
        dispatch(loadSubreddit({ search: subredditName }))
    };


    return (
        <div className={styles.formWrap}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={`${styles.header} ${styles.search}`}
                    id="searchTerm"
                    value={search}
                    onChange={(e) => { handleSearch(e.target.value); }}
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
            {
                isLoaded ?
                    <div className={styles.searchIndex}>
                        {subredditList.slice(0, 5).map((subreddit, index) => (
                            <HeaderFormSubredditList post={subreddit} key={index} handleClick={handleSubredditSearch} />
                        ))}
                    </div> :
                    <></>
            }
        </div>
    )
}