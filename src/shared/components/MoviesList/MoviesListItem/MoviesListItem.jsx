import styles from './moviesListItem.module.css';


function MoviesListItem({ title, poster_path }) {

    return (
        <li className={styles.item}>
            <h3>{title}</h3>
        </li>
    )
 }
export default MoviesListItem;
