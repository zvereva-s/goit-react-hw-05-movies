import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CastItem from './CastItem';
import Loader from 'shared/components/Loader';

import { getMovieCast } from '../../shared/service/API/themoviedb';
import styles from './cast.module.css';

function Cast() {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })
    const { id } = useParams();

    useEffect(() => {
        async function fetchMovieCast() {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }))
            try {
                const data = await getMovieCast(id);
                setState(prevState => ({
                    ...prevState,
                    items: data
                }))
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error
                }))
            }
            finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }))
            }
        }
        fetchMovieCast();
    }, []);

    const { items, loading, error } = state;
    const isItem = items.length > 0;

    return (
        <>
            {loading && <Loader />}
            {error && <p className={styles.p}>Cast not found</p>}
            {!isItem && !loading && <p>Cast not found.</p>}
            {isItem && <CastItem items={items}/>}
        </>
        )

}
export default Cast;