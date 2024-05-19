import { useEffect, useState } from "react";
import Card from "../../../entities/Card";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import useDebounce from "../../../shared/hooks/useDebounce";
import getMovies from "../../../shared/api/getMovies";

const Movies = ({ search }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (debouncedSearch) {
          const searchResults = await getMovies(debouncedSearch, page);
          setMovies(searchResults);
        } else {
          setMovies(null);
        }
      } catch (error) {
        console.error("Error fetching movies:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearch, page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (movies && page < Math.ceil(movies.totalResults / 10)) {
      setPage(page + 1);
    }
  };

  if (loading) {
    return <h2 className={styles.resultSearch}>Loading...</h2>;
  }

  if (movies === null) {
    return <h2 className={styles.resultSearch}>Enter movie</h2>;
  }

  if (!movies) {
    return <h2 className={styles.resultSearch}>Movie not found</h2>;
  }

  return (
    <>
      {movies && (
        <h2 className={styles.resultSearch}>
          You searched for: {search}, {movies.totalResults} results found
        </h2>
      )}
      <div className={styles.moviesWrapper}>
        {movies &&
          movies.Search.map((movie) => {
            return <Card items={movie} key={movie.imdbID} />;
          })}
      </div>
      <div className={styles.paginationWrapper}>
        <button onClick={handlePrevPage}>{"<"}</button>
        {Array.from({ length: Math.ceil(movies.totalResults / 10) }).map(
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => setPage(index + 1)}
              className={index + 1 === page ? styles.activePage: ""}
            >
              {index + 1}
            </button>
          )
        )}
        <button onClick={handleNextPage}>{">"}</button>
      </div>
    </>
  );
};

Movies.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Movies;