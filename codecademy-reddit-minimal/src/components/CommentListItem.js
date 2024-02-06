import React from 'react';
import styles from '../features/content/Content.module.css';
import Markdown from 'react-markdown';

function CommentListItem({comment}) {

    const commentReply = (replies) => {
        if (replies) {
            return (
                <div className={styles.reply}>
                    {replies?.data?.children?.map((reply) => (
                        reply.data.body ? 
                            <div className={styles.replyContainer}>
                                <h4 className={styles.commentAuthor}>{reply?.data?.author}</h4>
                                <p className={styles.commentBody}><Markdown>{reply?.data?.body}</Markdown></p>
                                {commentReply(reply?.data?.replies)}
                            </div>
                            : null
                    ))}
                </div>
            )
        } else {return null;}
    };

    return(
        <div className={styles.commentContainer}>
            <h4 className={styles.commentAuthor}>{comment.author}</h4>
            <p className={styles.commentBody}><Markdown>{comment.body}</Markdown></p>
            {commentReply(comment.replies)}
        </div>
    )
};

export default CommentListItem;