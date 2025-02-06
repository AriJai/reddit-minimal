import React from 'react';
import styles from '../features/subreddit/Subreddit.module.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {useDispatch} from 'react-redux';
import {
    loadSearch
} from '../features/content/contentSlice.js';
import { loadSubreddit } from '../features/subreddit/subredditSlice.js';

function SubredditListItem({post}) {
    const dispatch = useDispatch();
    
    return (
        <article className={styles.subredditTile} onClick={(e) => {dispatch(loadSearch({search: post.display_name})); dispatch(loadSubreddit({search: post.display_name}))}}>
            <h5 className={styles.subredditName}><a className={styles.link} href={`https://www.reddit.com/${post.display_name_prefixed}`} target={`_blank`}>{post.display_name_prefixed}</a></h5>
            <p className={styles.subredditSubscribers}>{post.subscribers} members</p>
            <img  className={styles.subredditIcon} src={post.community_icon} />
        </article>
    )
};

export default SubredditListItem;