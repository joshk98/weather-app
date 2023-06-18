import React from "react";

import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Enter a city in the UK"
        onChange={handleInputChange}
        value={searchText}
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
