import PropTypes from 'prop-types';
import { useForm } from '../../../shared/hooks/useForm';
import { initialState } from './initialState';

import styles from './moviesSearchForm.module.css';

function MoviesSearchForm({onSubmit}) {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });
    const { search } = state;

    return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        <button className={styles.button} type="submit">
          Search movie
        </button>
      </form>
    </div>
  );


 };
export default MoviesSearchForm;

MoviesSearchForm.defaultProps = {
  onSubmit:()=>{}
}
MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}