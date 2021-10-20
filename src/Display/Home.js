import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

export default function Home() {
  return (
    <div className="Cup-container">
      <div className="plate"></div>
      <div className="cup">
        <div className="top-cup">
          <div className="circle">
            <div className="coffee">
              <Link to="/">Buy</Link>
            </div>
          </div>
        </div>
        <div className="handle"></div>
      </div>
    </div>
  );
}
