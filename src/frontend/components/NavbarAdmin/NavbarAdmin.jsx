import SearchBar from "./Searchbar";
import LogOutButton from "../LogOutButton/LogOutButton";
import styles from './NavbarAdmin.module.css'

const NavbarAdmin = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.search}>
                <SearchBar></SearchBar>
            </div>
            <div className={styles.feedback}>
                <i className="fa-solid fa-bullhorn"></i>
                <span>Feedback?</span>
            </div>
            <div className={styles.noti}>
                <i className="fa-solid fa-bell"></i>
            </div>
            <div className={styles.mess}>
                <i className="fa-solid fa-comment"></i>
            </div>
            <LogOutButton/>

        </nav>
    )

}

export default NavbarAdmin;