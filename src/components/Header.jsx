import React from "react";
import "../styles/components/header.css";

const Header = () => {
    return (
      <header className="header">
        <input type="search" placeholder="Search" className="search-input" />
        <button className="notification-btn">🔔</button>
        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="avatar"
          />
          <button className="add-btn">+</button>
        </div>
      </header>
    );
  };
  
  export default Header;
