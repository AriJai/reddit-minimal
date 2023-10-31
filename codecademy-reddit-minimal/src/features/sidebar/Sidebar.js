import styles from './Sidebar.module.css';
import { loadSearch } from '../content/contentSlice.js';
import {useDispatch} from 'react-redux';

function Sidebar() {
  const dispatch = useDispatch();  
    return(
      <div className={styles.container}>
        <div className={styles.box}>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search: `popular`}))}>Popular</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search: `gaming`}))}>Gaming</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search: `sports`}))}>Sports</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search: `buisness`}))}>Buisness</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search: `crypto`}))}>Crypto</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search: `television`}))}>Television</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search: `celebrity`}))}>Celebrity</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search: `Animals`}))}>Animal and Pets</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search: `anime`}))}>Anime</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`art`}))}>Art</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`cars`}))}>Cars and Motor Vehicles</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`crafts`}))}>Crafts and DIY</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`culture`}))}>Culture, Race, and Ethnicity</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`ethics`}))}>Ethics and Philosophy</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`fashion`}))}>Fashion</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`food`}))}>Food and Drink</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`history`}))}>History</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`Hobbies`}))}>Hobbies</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`law`}))}>Law</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`Learning`}))}>Learning and Education</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`Military`}))}>Military</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`movies`}))}>Movies</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`music`}))}>Music</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`places`}))}>Place</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`podcasts`}))}>Podcasts and Streamers</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`politics`}))}>Politics</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`programming`}))}>Programming</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`literature`}))}>Reading, Writing, and Literature</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`religion`}))}>Religion and Spirituality</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`science`}))}>Science</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`tabletop`}))}>Tabletop Games</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`tech`}))}>Technology</aside>
          <aside className={styles.topic} onClick={(e) => dispatch(loadSearch({search:`travel`}))}>Travel</aside>
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