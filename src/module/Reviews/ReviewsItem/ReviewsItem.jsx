import PropTypes from 'prop-types';
import styles from './reviewsItem.module.css';

function ReviewsItem({ items }) {
    const elements = items.map(({ id, author, content }) => <li key={id} className={styles.item}><p className={styles.author}>{author}</p><p className={styles.content}>{content}</p></li>);

    return (<ul className={styles.list}>
        {elements}
        </ul>)
}
export default ReviewsItem;

ReviewsItem.defaultProps = {
    items: [],
}
ReviewsItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string,
            content: PropTypes.string,
        })
    )
}