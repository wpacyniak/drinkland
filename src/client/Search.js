import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-box">
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="search-bar"
        placeholder="Szukaj..."
        name="s"
      />
    </div>
  );
};

export default Search;
