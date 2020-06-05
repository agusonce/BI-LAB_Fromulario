import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
  <Header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </Header>
);
export default Header;