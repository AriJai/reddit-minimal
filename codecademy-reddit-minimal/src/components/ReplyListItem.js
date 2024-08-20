import React from 'react';
import styles from '../features/content/Content.module.css';
import Markdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { toggleReply } from '../features/content/contentSlice';

const ReplyListItem = ({props, reply, postId, commentId, replyId}) => {
    const dispatch = useDispatch();

    const onToggleReply = (idToFind) => {
        dispatch(toggleReply({postId, commentId, idToFind}));
    };

    const replyReplies = () => {
        if (reply?.data?.replies?.data?.children) {
            return (
                <div className={styles.reply}>
                    {reply?.data?.replies?.data?.children?.map((replies, indexReplies) => (
                        <ReplyListItem 
                            reply={replies} 
                            key={indexReplies} 
                            replyId={replyId}
                            commentId={commentId} 
                            postId={postId}
                            newId={indexReplies} />
                    ))}
                </div>
            )
        } else {return null;}
    };

    return(
        <div className={styles.replyContainer}>
            <h4 className={styles.commentAuthor}>{reply?.data?.author}</h4>
            <p className={styles.commentBody}><Markdown>{reply?.data?.body}</Markdown></p>
            {
                reply?.data?.showingReplies === false && typeof reply?.data?.replies !== 'string' ? 
                    <button type={"button"} className={styles.repliesButton} onClick={() => onToggleReply(reply?.data?.id)}>{reply?.data?.replies?.data?.children?.length} Replies</button>
                    : ""
            }
            {
                reply?.data?.showingReplies === true ?
                    replyReplies()
                    : ""
            }
        </div>
    )
}

export default ReplyListItem;