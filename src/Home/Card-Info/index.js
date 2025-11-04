import React, { useState } from "react";
import Search from "./Search";
import CardInfo from "./Card-Info";
import TypeEffect from "./Type-Effect";
import Logo from "./Logo";

function Home() {
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = (query) => {
    setSearchResult(query);
  };

  return (
    <main className="p-6 flex flex-col items-center">
      <Logo
        imageUrl="/logo.png" // simpan logo di folder public
        appName="Pokedex React"
      />

      <Search onSearch={handleSearch} />

      <CardInfo result={searchResult} />

      {/* Tampilkan efek berdasarkan hasil pencarian */}
      <TypeEffect type={searchResult ? searchResult : "Normal"} />
    </main>
  );
}

export default Home;