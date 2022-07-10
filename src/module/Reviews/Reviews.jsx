import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ReviewsItem from './ReviewsItem';
import Loader from 'shared/components/Loader';

import { getMovieReviews } from '../../shared/service/API/themoviedb';
import styles from './reviews.module.css';

function Reviews() {
const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })
    const { id } = useParams();

    useEffect(() => {
        async function fetchMovieReview() {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }))
            try {
                const data = await getMovieReviews(id);
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
        fetchMovieReview();
    }, [id, setState]);

    const { items, loading, error } = state;
    const isItem = items.length > 0;

    return (
        <>
            {loading && <Loader />}
            {error && <p className={styles.p}>Reviews not found</p>}
            {!isItem && !loading && <p>Movie has not reviews.</p>}
            {isItem && <ReviewsItem items={items}/>}
        </>
        )
 };
export default Reviews;