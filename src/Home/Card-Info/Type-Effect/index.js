import React, { useEffect, useState } from "react";

function TypeEffect({ type }) {
  const [color, setColor] = useState("gray");

  // Efek perubahan warna sesuai tipe
  useEffect(() => {
    switch (type.toLowerCase()) {
      case "fire":
        setColor("red");
        break;
      case "water":
        setColor("blue");
        break;
      case "grass":
        setColor("green");
        break;
      case "electric":
        setColor("yellow");
        break;
      default:
        setColor("gray");
        break;
    }
  }, [type]);

  return (
    <div
      className="text-center p-4 mt-4 rounded shadow"
      style={{ backgroundColor: color, color: "white" }}
    >
      <p className="font-semibold">
        🔥 Tipe Efek: <span className="capitalize">{type}</span>
      </p>
    </div>
  );
}

export default TypeEffect;