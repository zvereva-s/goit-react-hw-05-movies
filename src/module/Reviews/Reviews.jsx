import { useParams } from 'react-router-dom';

import ReviewsItem from './ReviewsItem';
import Loader from 'shared/components/Loader';
import { useFetchItems } from 'shared/hooks/useFetchItems';
import { getMovieReviews } from '../../shared/service/API/themoviedb';
import styles from './reviews.module.css';

function Reviews() {
    const { id } = useParams();
    const { state } = useFetchItems({ getFetch: getMovieReviews, array: [id], params: id });

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