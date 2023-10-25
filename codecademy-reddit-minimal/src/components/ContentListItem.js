import React from 'react';
import styles from '../features/content/Content.module.css';

function ContentListItem({post}) {
    return (
        <article key={post.id} className={styles.contentContainer}>
            <h2 className={styles.title}>{post.title}</h2>
            <h3>By: {post.author}</h3>
            <h6>{post.subreddit_name_prefixed}</h6>
            <img src={post.url} className={styles.image} alt='' />
            {post.is_video ? <video controls style={{width:'60%'}}><source src={post.media?.reddit_video.fallback_url}/></video> : ''}
            <p>{post.selftext}</p>
        </article>
    )
};

export default ContentListItem;