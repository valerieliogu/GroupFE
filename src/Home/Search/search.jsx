import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); 
    alert(`Mencari: ${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Cari sesuatu..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Cari</button>
    </form>
  ); 
}

export default Search;