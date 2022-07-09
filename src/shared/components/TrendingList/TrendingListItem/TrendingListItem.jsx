import styles from './trendingListItem.module.css';


function TrendingListItem({ title, poster_path }) {

    return (
        <li className={styles.item}>
            <h3>{title}</h3>
        </li>
    )
 }
export default TrendingListItem;
