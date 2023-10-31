import React from 'react';
import styles from '../features/content/Content.module.css';

function CommentListItem({comment}) {

    return(
        <div>
            <p>{comment.body}</p><br></br>
        </div>
    )
};

export default CommentListItem;