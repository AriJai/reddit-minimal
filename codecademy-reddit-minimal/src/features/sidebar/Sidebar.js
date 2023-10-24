import styles from './Sidebar.module.css';

function Sidebar() {
    return(
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.topic}>Popular</div>
            <div className={styles.topic}>Saved</div>
            <div className={styles.topic}>Subreddit</div>
          </div>
          <div className={styles.filler}>
          </div>
          <p>
            ARIAN JAIHOONI
          </p>
        </div>
    )
}

export default Sidebar;