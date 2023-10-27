import React from 'react';
import styles from '../features/subreddit/Subreddit.module.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {useDispatch} from 'react-redux';
import {
    loadSearch
} from '../features/content/contentSlice.js';

function SubredditListItem({post}) {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(loadSearch(e.target.value.post.display_name))
    };
    return (
        <article className={styles.subredditTile} onClick={handleClick}>
            <h5 className={styles.subredditName}><a className={styles.link} href={`https://www.reddit.com/${post.display_name_prefixed}`}>{post.display_name_prefixed}</a></h5>
            <p className={styles.subredditSubscribers}>{post.subscribers} members</p>
            <img  className={styles.subredditIcon} src={post.icon_img} />
        </article>
    )
};

export default SubredditListItem;