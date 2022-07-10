import { useState, useEffect } from 'react';

import Loader from '../../shared/components/Loader';
import MoviesList from "shared/components/MoviesList";

import { getTrendingMovies } from '../../shared/service/API/themoviedb';
import styles from './trendMovies.module.css';


function TrendMovies() { 
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
   })

    useEffect(() => {
        async function fetchTrendingMovies() {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));
            try {
                const data = await getTrendingMovies();
                setState(prevState => ({
                    ...prevState,
                    items: [...data],
                }))
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => ({
                    ...prevState, 
                    loading: false,
                }))
            }
        }
        fetchTrendingMovies();
    },[])
    const { items, loading, error } = state;
    return (
        <>
            <h1 className={styles.title}>Trending today</h1>
            {loading && <Loader />}
            {error && <p>Something goes wrong...</p>}
            <MoviesList items={items} />
        </>
    )
};

export default TrendMovies;