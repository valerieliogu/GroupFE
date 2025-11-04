import React, { useState } from "react";
import Search from "./Search";
import CardInfo from "./Card-Info";
import TypeEffect from "./Type-Effect";

function Home() {
  const [searchResult, setSearchResult] = useState("");

  // Fungsi menerima input dari Search
  const handleSearch = (query) => {
    setSearchResult(query);
  };

  return (
    <main className="p-4">
      {/* Kirim fungsi ke Search */}
      <Search onSearch={handleSearch} />

      {/* Tampilkan hasil pencarian di CardInfo */}
      <CardInfo result={searchResult} />

      {/* Kirim data hasil ke TypeEffect */}
      <TypeEffect type={searchResult ? "Fire" : "Normal"} />
    </main>
  );
}

export default Home;