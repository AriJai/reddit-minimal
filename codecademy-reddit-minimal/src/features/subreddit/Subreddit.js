import styles from './Subreddit.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllSubreddits,
    loadSubreddit,
} from '../subreddit/subredditSlice.js';
import SubredditListItem from '../../components/SubredditListItem';

function Subreddit() {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectAllSubreddits);
    useEffect(() => {
        dispatch(loadSubreddit({search: 'popular'}))
    }, [dispatch])

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Communities based off search:</h2>
            <div className={styles.subredditList}>{
                subreddits.map((post) => (
                    <SubredditListItem post={post} key={post.id}/>
            ))}</div>
        </div>
    )
}

export default Subreddit;