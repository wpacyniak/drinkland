import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-box">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="search-bar"
        placeholder="Szukaj..."
      />
    </div>
  );
};

export default Search;
