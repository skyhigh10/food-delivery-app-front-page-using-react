import React from "react";
import "../../Components/Navbar/Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <ul>
            <p>
              <h1>Chiemelie</h1>
            </p>

            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
