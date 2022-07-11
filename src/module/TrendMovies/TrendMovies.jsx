import { useFetchItems } from 'shared/hooks/useFetchItems';
import Loader from '../../shared/components/Loader';
import MoviesList from "shared/components/MoviesList";

import { getTrendingMovies } from '../../shared/service/API/themoviedb';
import styles from './trendMovies.module.css';


function TrendMovies() { 
    const { state} = useFetchItems({getFetch: getTrendingMovies});
    const { items, loading, error } = state;
    return (
        <>
            <h1 className={styles.title}>Trending today</h1>
            {loading && <Loader />}
            {error && <p>Something gone wrong...</p>}
            <MoviesList items={items} />
        </>
    )
};

export default TrendMovies;

