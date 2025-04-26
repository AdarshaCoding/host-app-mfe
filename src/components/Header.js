import React from "react";
import "./styles.css";

const Title = () => {
  return <h2 className="title">Adarsha</h2>;
};
const Header = () => {
  return (
    <div className="app-header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
