import styles from "./Header.module.css";
import HeaderForm from '../../components/HeaderForm';
import { useDispatch, useSelector } from "react-redux";
import {
    loadSearch
} from '../content/contentSlice.js';


function Header(){
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        dispatch(loadSearch(e));
    };
    const handleRedirect = (e) => {
        e.preventDefault();
        window.location.href= 'https://www.reddit.com';
    };

    return(
        <header>
            <h1 className={`${styles.header} ${styles.logo}`}>Reddit<span>Minimal</span></h1>
            <HeaderForm onSearchRequest={handleSubmit}/>
            <button className={`${styles.header} ${styles.button}`} onClick={handleRedirect}>See Reddit</button>
        </header>
    )
}
export default Header;