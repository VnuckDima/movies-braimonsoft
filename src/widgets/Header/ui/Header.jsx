import styles from "./styles.module.css";
import User from "../../../assets/icons/user.svg";
import ArrowDown from "../../../assets/icons/arrow-down.svg";
import PropTypes from "prop-types";
import SearchInput from "../../../features/SearchInput";

const Header = ({ setSearch }) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.title}>Movie Catalog</h1>
        <div className={styles.searchWrapper}>
          <SearchInput setSearch={setSearch} className={styles.search} />
        </div>
        <div className={styles.userWrapper}>
          <div className={styles.iconWrapper}>
            <User width="20" height="20" />
          </div>
          <p className={styles.userName}>Dmitry Unuk</p>
          <div className={styles.iconWrapper}>
            <ArrowDown width="20" height="20" />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Header;
