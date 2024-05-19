import PropTypes from "prop-types";
import styles from "./styles.module.css";
import NoImage from '../../../assets/images/no-image.png'

const Card = ({ items }) => {
  const imagePoster = items.Poster === 'N/A' ? NoImage : items.Poster

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imagePoster} alt={items.Title} className={styles.image} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>Name: {items.Title}</p>
        <p className={styles.detail}>Year: {items.Year}</p>
        <p className={styles.detail}>imdbID: {items.imdbID}</p>
        <p className={styles.detail}>Type: {items.Type}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  items: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;