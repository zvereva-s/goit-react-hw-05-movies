import HeaderMenu from "./HeaderMenu";
import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <nav className={styles.nav}>
                    <HeaderMenu />
                </nav>
            </div>
        </header>
    )
}

export default Header;