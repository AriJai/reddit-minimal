import styles from './Content.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadPopular,
    loadSearch,
    selectAllContents,
    isLoading,
    hasError,
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



    if (isLoadingContent){
        return <div style={{minWidth:'100%'}}>...Loading Reddit</div>
    }
    else if (containsError){
        return <div style={{minWidth:'100%'}}>...Sorry, this subreddit is unavailable!</div>
    }
    return (
        <section className={styles.container}>
            {contentPreviews?.map((post) => (
                <ContentListItem post={post} key={post.id}/>
            ))}
        </section>
    )
}

export default Content;