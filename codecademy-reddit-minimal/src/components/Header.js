import styles from "./Header.module.css";

function Header(){
    return(
        <header>
            <h1 className={[styles.header ,styles.logo]}>Reddit<span>Minimal</span></h1>
            <input className={[styles.header ,styles.search]} placeholder='Search'/>
            <button className={styles.header} >See Reddit</button>
        </header>
    )
}
export default Header;