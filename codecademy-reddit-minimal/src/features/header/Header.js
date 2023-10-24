import styles from "./Header.module.css";
import HeaderForm from '../../components/HeaderForm';

function Header(){
    return(
        <header>
            <h1 className={`${styles.header} ${styles.logo}`}>Reddit<span>Minimal</span></h1>
            <HeaderForm />
            <button className={`${styles.header} ${styles.button}`} >See Reddit</button>
        </header>
    )
}
export default Header;