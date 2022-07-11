import { useParams } from 'react-router-dom';

import CastItem from './CastItem';
import Loader from 'shared/components/Loader';
import { useFetchItems } from 'shared/hooks/useFetchItems';
import { getMovieCast } from '../../shared/service/API/themoviedb';
import styles from './cast.module.css';

function Cast() {
    const { id } = useParams();
    const { state } = useFetchItems({ getFetch: getMovieCast, array: [id], params: id });

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
