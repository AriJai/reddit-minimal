import styles from './Content.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadPopular,
    selectAllContents,
    isLoading,
} from './contentSlice.js';
import ContentListItem from '../../components/ContentListItem.js';


const Content = () => {
    const dispatch = useDispatch();
    // Used for finding all Content to present
    const contentPreviews = useSelector(selectAllContents);
    // TODO: display a loading animation or sign
    const isLoadingContent = useSelector(isLoading);
    useEffect(() => {
        dispatch(loadPopular());
    }, [dispatch]);
    if (isLoadingContent){
        return <div>...Loading Reddit</div>
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