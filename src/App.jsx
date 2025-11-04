import React from "react";
import Home from "./Home/index.jsx";
import Footer from "./Footer";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
