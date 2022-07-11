import PropTypes from 'prop-types';
import defaulImg from '../../../images/user.png';
import styles from './castItem.module.css';

function CastItem({ items }) {

    const elements = items.map(({ id, name, character, profile_path }) => {
        const srcUrl = profile_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}` : defaulImg;

        return (<li className={styles.item} key={id}>
            <img className={styles.img} src={srcUrl} alt={name}/>
            <div className={styles.box_info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.character}>{character}</p>
            </div>
        </li>);
    })
    
    return (<ul className={styles.list}>
        {elements}
            </ul>)
}
export default CastItem;

CastItem.defaulProps = {
    items: [],
}
CastItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string,
            character: PropTypes.string,
            profile_path: PropTypes.string,
        })
    )
}