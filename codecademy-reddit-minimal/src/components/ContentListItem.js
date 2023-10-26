import React from 'react';
import styles from '../features/content/Content.module.css';
import Markdown from 'react-markdown';

function ContentListItem({post}) {


    return (
        <article key={post.id} className={styles.contentContainer}>
            <h6>{post.subreddit_name_prefixed}</h6>
            <h5>By: {post.author}</h5>
            <h2 className={styles.title}>{post.title}</h2>
            <img src={post.url} className={styles.image} alt='' />
            {
                post.is_video ? 
                    <video 
                        controls 
                        className={styles.image}
                    >
                        <source src={post.media?.reddit_video.fallback_url}/>
                        <source src={post.media?.reddit_video.scrubber_media_url.replace("DASH_96.mp4", "DASH_AUDIO_128.mp4")}/>
                        <a href={post.media?.reddit_video.scrubber_media_url}></a>
                    </video>: ''
            }
            {post.selftext ? <div className={styles.markdown}><Markdown>{post.selftext}</Markdown></div> : ''}
        </article>
    )
};

export default ContentListItem;