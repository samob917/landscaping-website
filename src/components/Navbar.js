import React from "react";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar--logo">
        <h1>Landscaping Gone Wild</h1>
      </div>
      <div className="Navbar--sections">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Photos</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
