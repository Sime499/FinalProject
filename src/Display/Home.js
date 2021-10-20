import React from "react";
import "../Home.css";

export default function Home() {
  return (
    <div className="Cup-container">
      <div className="plate"></div>
      <div className="cup">
        <div className="top-cup">
          <div className="circle">
            <div className="coffee"></div>
          </div>
        </div>
        <div className="handle"></div>
      </div>
    </div>
  );
}
