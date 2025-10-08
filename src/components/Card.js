
import React from "react";

const Card = ({ children }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "20px",
      maxWidth: "400px",
      margin: "20px auto",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
};

export default Card;
