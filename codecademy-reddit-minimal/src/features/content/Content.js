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
    }, [dispatch]);

    const onLoadComments = (index) => {
        const getComments = (permalink) => {
            dispatch(loadComments({index, permalink}));
        }
        return getComments;
    };
    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(toggleComments({index, permalink}));
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
            {contentPreviews?.map((post, index) => (
                <ContentListItem post={post} key={post.id} onLoadComments={onLoadComments(index)} onToggleComments={onToggleComments(index)}/>
            ))}
        </section>
    )
}

export default Content;