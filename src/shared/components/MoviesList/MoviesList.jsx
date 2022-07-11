import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

import MoviesListItem from './MoviesListItem';
import styles from './moviesList.module.css';

function MoviesList({ items }) {
    
    const location = useLocation();

    const elements = items.map(({ id, title, poster_path }) => <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}><MoviesListItem title={title} poster_path={poster_path} /></Link>
        
    </li>)
    
    return (
        <>
            <ul className={styles.list}>
            {elements}
            </ul>
        </>
            )
 }
export default MoviesList;

MoviesList.defaultProps = {
    items: [],
}
MoviesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string,
            poster_path: PropTypes.string,
        })
    )
}