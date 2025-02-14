import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import styles from "../features/header/Header.module.css";
import { searchIsLoading, searchHasError, selectSearchSubreddits } from "../features/subreddit/subredditSlice";
import { useSelector } from "react-redux";


export default function HeaderFormSubredditList({ handleClick }) {
    const [subReddits, setSubReddits] = useState([]);
    const isLoading = useSelector(searchIsLoading);
    const hasError = useSelector(searchHasError);
    const searchResults = useSelector(selectSearchSubreddits);

    useEffect(() => {
        if (searchResults) {
            setSubReddits(searchResults);
        } else {
            setSubReddits([]);
        }
    }, [searchResults]);

    const image = (post) => {
        if (!post.community_icon) {
            return (
                <div style={{ width: 20, height: 20, clipPath: "circle()", background: "lightgray" }}></div>
            )
        }
        return (
            <img src={post.community_icon} style={{ width: 20, height: 20, clipPath: "circle()" }} />
        )
    };


    if (isLoading) {
        return (
            subReddits.slice(0,5).map((subReddit,index) => (
                <div className={styles.subredditListItem} key={`sub_${index}`}>
                    <img className={styles.skeleton} style={{ width: 20, height: 20, clipPath: "circle()"}} />
                    <div className={styles.skeleton} style={{ maxWidth: 200, width: 200, height: 20}}></div>
                </div>
            ))
        );
    } else if (subReddits.length === 0) {
        return;
    } else if (hasError) {
        return (
            <div className={styles.subredditListItem}>
                Unable to find any associated Subreddit...
            </div>
        );
    } else return (
        subReddits.slice(0, 5).map((subReddit, index) => (
            <div className={styles.subredditListItem} onClick={() => handleClick(subReddit.display_name)} key={index} >
                {image(subReddit)}
                <h4><Markdown>{subReddit.display_name_prefixed}</Markdown></h4>
            </div>
        ))
    )

};