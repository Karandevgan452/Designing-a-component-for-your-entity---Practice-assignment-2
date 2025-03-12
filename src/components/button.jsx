import React, { useState } from "react";

const ViewProductButton = () => {
  const [colour, setColor] = useState("crimson");

  return (
    <button
    style={{
        backgroundColor: colour
    }}
      onClick={() => setColor((e) => (e === "crimson" ? "blue" : "crimson"))}
    >
      View Product
    </button>
  );
};

export default ViewProductButton;
