import PropTypes from 'prop-types';
import styles from './moviesListItem.module.css';


function MoviesListItem({ title, poster_path }) {
    return (
        <li className={styles.item}>
            <img className={styles.img} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt={title} width="150"/>
            <h3>{title}</h3>
        </li>
    )
 }
export default MoviesListItem;

MoviesListItem.propTypes = {
    title: PropTypes.string,
    poster_path: PropTypes.string,
}