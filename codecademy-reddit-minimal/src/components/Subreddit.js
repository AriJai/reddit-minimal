import styles from './Subreddit.module.css';

function Subreddit() {

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Communities</h2>
            <button className={styles.expandButton}>See more</button>
        </div>
    )
}

export default Subreddit;