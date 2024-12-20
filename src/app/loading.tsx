import React from "react";

export default function Loading() {
  return (
    <div aria-label="Loading" className="loading">
      <div className="spinner"></div>
      <h2 className="loading-text">Loading...</h2>
    </div>
  );
}
