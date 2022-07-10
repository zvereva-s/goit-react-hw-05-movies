import { Link, useLocation } from "react-router-dom";

import MoviesListItem from './MoviesListItem';
import styles from './moviesList.module.css';

function MoviesList({ items }) {
    
    const location = useLocation();

    const elements = items.map(({ id, title }) => <li key={id}>
        <Link to={`/movies/${id}`} state={{from:location}}><MoviesListItem title={title} /></Link>
        
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