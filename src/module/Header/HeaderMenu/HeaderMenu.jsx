
import styles from './headerMenu.module.css';
import {items} from './items';
import { NavLink } from 'react-router-dom';

function HeaderMenu() {
    
    function getLinkClassname({ isActive }) {
        return isActive ? styles.isActive : styles.link;
    }

    const elements = items.map(({ id, link, text }) =>
        <li key={id} className={styles.item}>
        <NavLink className={getLinkClassname} to={link}>{text}</NavLink>
        </li>)
    
    return (
        <ul className={styles.list}>
        {elements}
        </ul>)
}

export default HeaderMenu;