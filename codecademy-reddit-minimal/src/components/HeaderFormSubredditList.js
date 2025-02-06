import React from "react";
import Markdown from "react-markdown";
import styles from "../features/header/Header.module.css"


export default function HeaderFormSubredditList({post, handleClick}) {

    console.log(post)
    const image = (post) => {
        if (!post.community_icon) {
            return (
                <div style={{width:20, height:20, clipPath:"circle()",background:"lightgray"}}></div>
            )
        }
        return (
            <img src={post.community_icon} style={{width: 20, height: 20, clipPath:"circle()"}}/>
        )
    };

    return (
        <div className={styles.subredditListItem} onClick={() => handleClick(post.display_name)}>
            {image(post)}
            <h4><Markdown>{post.display_name_prefixed}</Markdown></h4>
        </div>
    )


};