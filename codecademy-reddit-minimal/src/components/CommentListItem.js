import React from 'react';
import styles from '../features/content/Content.module.css';
import Markdown from 'react-markdown';

function CommentListItem({comment}) {

    return(
        <div className={styles.commentContainer}>
            <h4 className={styles.commentAuthor}>{comment.author}</h4>
            <p className={styles.commentBody}><Markdown>{comment.body}</Markdown></p>
        </div>
    )
};

export default CommentListItem;