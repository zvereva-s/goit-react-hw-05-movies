import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from "react-router-dom";

import styles from './singleMovieItem.module.css';

function SingleMovieItem({ item }) {
    const { title, overview, genres, vote_average, poster_path, release_date } = item;
    const genresString = genres.map(el => el.name).join(', ');
    const userScore = vote_average * 10;
    const year = release_date.slice(0, 4);
    

    return (
        <div className={styles.box}>
                <div className={styles.info_box}>
                    <img className={styles.img} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt={title} />
                    <div className={styles.wrapper}>
                        <h3>{`${title} (${year})`}</h3>
                    <table>
                        <tbody className={styles.tbody}>
                            <tr>
                                <td>User Score: </td>
                                <td>{userScore}%</td>
                            </tr>
                            <tr>
                                <td>Overview: </td>
                                    <td>{overview}</td>
                                </tr>    
                                <tr>
                                    <td>Genres</td>
                                <td>{genresString}</td>
                                </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className={styles.additional_box}>
                    <ul className={styles.list}>
                    <li><Link to='cast'>Cast</Link></li>
                    <li><Link to='reviews'>Reviews</Link></li>
                </ul>    
                <Outlet />
                </div>
            </div>
    )
 }
export default memo(SingleMovieItem);

SingleMovieItem.defaultProps = {
    item:{},
}
SingleMovieItem.propTypes = {
    item: PropTypes.objectOf(
        PropTypes.shape({
            title: PropTypes.string,
            overview: PropTypes.string,
            genres: PropTypes.array,
            vote_average: PropTypes.string,
            poster_path: PropTypes.string,
            release_date: PropTypes.string,
        })
    )
}