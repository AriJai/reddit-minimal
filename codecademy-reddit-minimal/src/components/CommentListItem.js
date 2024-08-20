import React from 'react';
import styles from '../features/content/Content.module.css';
import Markdown from 'react-markdown';
import ReplyListItem from './ReplyListItem';
import { useDispatch } from 'react-redux';
import { toggleReply } from '../features/content/contentSlice';

function CommentListItem({props, postId, commentId, comment}) {
    const dispatch = useDispatch();

    const comments = comment?.replies?.data?.children.filter((replies) => 
        replies.data.body
    );

    const onToggleReply = (idToFind) => {
        dispatch(toggleReply({postId, commentId, comment, idToFind}));
    };

    const commentReply = () => {
        if (comment?.replies?.data?.children) {
            return (
                <div className={styles.reply}>
                    {comments.map((replies, indexReplies) => (
                        <ReplyListItem 
                            reply={replies} 
                            key={indexReplies} 
                            replyId={indexReplies}
                            commentId={commentId} 
                            postId={postId} />
                    ))}
                </div>
            )
        } else {return null;}
    };

    return(
        <div className={styles.commentContainer}>
            <h4 className={styles.commentAuthor}>{comment.author}</h4>
            <p className={styles.commentBody}><Markdown>{comment.body}</Markdown></p>
            {
                comment?.showingReplies === false && typeof comment.replies !== 'string' ? 
                    <button type={"button"} className={styles.repliesButton} onClick={() => onToggleReply(comment.id)}>{comments?.length} Replies</button>
                    : ""
            }
            {
                !comment?.showingReplies ? 
                    "" :
                    commentReply()
            }
            
        </div>
    )
};

export default CommentListItem;