import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Dev Insights</h1>
      <nav>
        <a href="#new-post">New Post</a>
      </nav>
    </header>
  );
};

export default Header;
