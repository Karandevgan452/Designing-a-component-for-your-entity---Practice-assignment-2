import React, { useState } from "react";

const ViewProductButton = () => {
  const [colour, setColor] = useState("crimson");

  return (
    <button
    style={{
        backgroundColor: colour
    }}
      onClick={() => setColor((e) => (e === "crimson" ? "blue" : "crimson"))}
      className="text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      View Product
    </button>
  );
};

export default ViewProductButton;
