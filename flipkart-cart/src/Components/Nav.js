import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ cartNum }) => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/"> Flipkart</Link>

        <form>
          <input />
        </form>
        <button>Log In</button>
        <p>More</p>
        <Link to="/cart">
          <button>Cart {cartNum}</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
