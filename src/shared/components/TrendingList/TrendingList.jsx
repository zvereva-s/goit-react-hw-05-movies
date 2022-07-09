import { Link, useLocation } from "react-router-dom";

import TrendingListItem from './TrendingListItem';
import styles from './trendingList.module.css';

function TrendingList({ items }) {
    
    const location = useLocation();

    const elements = items.map(({ id, title }) => <li key={id}>
        <Link to={`/movies/${id}`} state={{from:location}}><TrendingListItem title={title} /></Link>
        
    </li>)
    
    return (
        <>
            <ul className={styles.list}>
            {elements}
            </ul>
        </>
            )
 }
export default TrendingList;

TrendingList.defaultProps = {
    items: [],
}