import React from 'react';
import styles from '../features/content/Content.module.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
    commentsLoading,
    commentsHasError,
} from '../features/content/contentSlice.js';
import CommentListItem from './CommentListItem.js';

function ContentListItem({post, onToggleComments}) {

    const renderComments = () => {
        //if(!post.commentsLoading && !post.commentsHasError) {
            return (
                <div>
                    {post.comments?.map((comment) => (
                        <CommentListItem comment={comment} key={comment.id} />
                    ))}
                </div>
            )
        //}
    };

    return (
        <article key={post.id} className={styles.contentContainer} >
            <div className={styles.header}>
                <h6><a className={styles.link} href={`https://www.reddit.com/${post.subreddit_name_prefixed}`} target={'_blank'}>{post.subreddit_name_prefixed}</a></h6>
                <h5>By: <a className={styles.link} href={`https://www.reddit.com/user/${post.author}`} target={'_blank'}>{post.author}</a></h5>
            </div>
            <h2 className={styles.title}><a className={styles.link} href={`https://www.reddit.com${post.permalink}`} target={'_blank'}>{post.title}</a></h2>
            {
                post.url.includes(`.jpg`) &&
                    <img src={post.url} className={styles.image} alt='' />
            }
            {
                post.url.includes(`.png`) &&
                    <img src={post.url} className={styles.image} alt='' />
            }
            {
                post.url.includes(`.jpeg`) &&
                    <img src={post.url} className={styles.image} alt='' />
            }
            {
                post.is_video ? 
                    <video 
                        controls 
                        className={styles.video}
                    >
                        <source src={post.media?.reddit_video.fallback_url}/>
                        <source src={post.media?.reddit_video.scrubber_media_url.replace("DASH_96.mp4", "DASH_AUDIO_128.mp4")}/>
                        <a href={post.media?.reddit_video.scrubber_media_url}></a>
                    </video>
                    : null
            }
            {
                post.selftext ? 
                    <div className={styles.markdown}><Markdown>{post.selftext}</Markdown></div> 
                    : null
            }
            <div className={styles.commentSection}>
                <button type={'button'} className={styles.commentButton} onClick={() => onToggleComments(post.permalink)}>{post.num_comments} comments</button>
                {renderComments()}
            </div>
        </article>
    )
};

export default ContentListItem;