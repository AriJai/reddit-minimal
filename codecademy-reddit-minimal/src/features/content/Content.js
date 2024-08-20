import styles from './Content.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadPopular,
    loadSearch,
    loadComments,
    selectAllContents,
    isLoading,
    hasError,
    toggleComments,
    toggleReply,
    commentsLoading,
    commentsHasError,
} from './contentSlice.js';
import ContentListItem from '../../components/ContentListItem.js';


const Content = () => {
    const dispatch = useDispatch();
    // Used for finding all Content to present
    const contentPreviews = useSelector(selectAllContents);
    // TODO: display a loading animation or sign
    const isLoadingContent = useSelector(isLoading);
    const containsError = useSelector(hasError)
    useEffect(() => {
        dispatch(loadPopular());
    }, []);

    const onLoadComments = (index) => {
        const getComments = (permalink) => {
            dispatch(loadComments({index, permalink}));
        }
        return getComments;
    };
    const onToggleComments = (index) => {
        const getComments = () => {
            dispatch(toggleComments({index}));
        }
        return getComments;
    };

    

    if (isLoadingContent){
        return <div style={{width:'100%', fontSize:"50px"}}>...Loading Reddit</div>
    }
    else if (containsError){
        return <div style={{width:'100%', fontSize:"50px"}}>...Sorry, this subreddit is unavailable!</div>
    }
    return (
        <section className={styles.container}>
            {contentPreviews?.map((posts, indexPosts) => (
                <ContentListItem 
                    post={posts} 
                    key={indexPosts}
                    postId={indexPosts} 
                    onLoadComments={onLoadComments(indexPosts)} 
                    onToggleComments={onToggleComments(indexPosts)}/>
            ))}
        </section>
    )
}

export default Content;