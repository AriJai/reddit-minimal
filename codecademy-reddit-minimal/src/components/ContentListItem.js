import React, { useState } from 'react';
import styles from '../features/content/Content.module.css';
import Markdown from 'react-markdown';
import CommentListItem from './CommentListItem.js';
import { toggleComments } from '../features/content/contentSlice.js';
import { useDispatch, useSelector } from 'react-redux';

function ContentListItem({ props, postId, post, onLoadComments, onToggleComments }) {
    const dispatch = useDispatch();
    const [reply, setReply] = useState(undefined);

    const renderComments = () => {
        if (post.showingComments) {
            return (
                <div className={styles.commentSection}>
                    {post.comments?.map((comments, indexComments) => (
                        <CommentListItem
                            comment={comments}
                            key={indexComments}
                            postId={postId}
                            commentId={indexComments} />
                    ))}
                </div>
            )
        } else { return null }
    };

    const renderMedia = () => {
        if (post.is_video) {
            return (
                <video
                    controls
                    className={styles.video}
                >
                    <source src={post.media?.reddit_video.fallback_url} />
                    <source src={post.media?.reddit_video.scrubber_media_url.replace("DASH_96.mp4", "DASH_AUDIO_128.mp4")} />
                    <a href={post.media?.reddit_video.scrubber_media_url}></a>
                </video>
            )
        } else if (post.media_metadata && post.gallery_data) {
            const mediaMetadata = post.media_metadata;
            const images = [];
            const galleryData = [];
            for( const item in post.gallery_data.items) {
                galleryData.push( post.gallery_data.items[item].media_id );
            }
            //console.log(galleryData, mediaMetadata[galleryData[0]].p[mediaMetadata[galleryData[0]].p.length-1].u);
            for( const [key, value] of Object.entries(mediaMetadata)) {
                if( galleryData.includes(key)) {
                    if( value.status === 'valid' ) {
                        images.push({key: key, value: value.p?.length - 1})
                    }
                }
            }
            console.log(images);
            return (
                <div className={styles.gallery}>
                    {images.map((item, index) => 
                        <img key = {index} src={post.media_metadata[item.key].p[item.value].u} className={styles.gallery_item}/>
                    )}
                </div>
            )
        } else {
            return (
                <img src={post.preview?.images[0].source.url} className={styles.image} alt='' />
            )
        }
    };

    return (
        <article key={postId} className={styles.contentContainer} >
            <div className={styles.header}>
                <h6><a className={styles.link} href={`https://www.reddit.com/${post.subreddit_name_prefixed}`} target={'_blank'}>{post.subreddit_name_prefixed}</a></h6>
                <h5>By: <a className={styles.link} href={`https://www.reddit.com/user/${post.author}`} target={'_blank'}>{post.author}</a></h5>
            </div>
            <h2 className={styles.title}><a className={styles.link} href={`https://www.reddit.com${post.permalink}`} target={'_blank'}>{post.title}</a></h2>
            {
                renderMedia()
            }
            {
                post.selftext ?
                    <div className={styles.markdown}><Markdown>{post.selftext}</Markdown></div>
                    : null
            }
            {
                post.showingComments ?
                    <button type={'button'} className={styles.commentButton} onClick={() => onToggleComments()}>hide comments</button> :
                    <button type={'button'} className={styles.commentButton} onClick={() => onLoadComments(post.permalink)}>{post.num_comments} comments</button>
            }
            {
                renderComments()
            }

        </article>
    )
};

export default ContentListItem;