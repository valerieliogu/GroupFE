import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1e1e1e",
        color: "#f5f5f5",
        textAlign: "center",
        padding: "20px 0",
        marginTop: "auto",
        fontSize: "14px",
        borderTop: "2px solid #444",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <a
          href="#"
          style={{
            color: "#aaa",
            margin: "0 12px",
            textDecoration: "none",
          }}
        >
          Home
        </a>
        <a
          href="#"
          style={{
            color: "#aaa",
            margin: "0 12px",
            textDecoration: "none",
          }}
        >
          About
        </a>
        <a
          href="#"
          style={{
            color: "#aaa",
            margin: "0 12px",
            textDecoration: "none",
          }}
        >
          Contact
        </a>
      </div>
      <p style={{ margin: 0 }}>© 2025 GroupFE. All rights reserved.</p>
      <div style={{ marginTop: "8px" }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaa", margin: "0 8px" }}
        >
          🌐 Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaa", margin: "0 8px" }}
        >
          📸 Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
