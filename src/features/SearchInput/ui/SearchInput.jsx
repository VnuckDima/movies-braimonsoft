import { useState } from "react";
import PropTypes from "prop-types";

const SearchInput = ({ setSearch, className }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearch(value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Search movies..."
      className={className}
    />
  );
};

SearchInput.propTypes = {
  setSearch: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SearchInput;