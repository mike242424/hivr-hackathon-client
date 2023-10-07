import React from "react";
import { Link } from "react-router-dom";

const AuthNavBar = () => {
  return (
    <nav className="navbar nav-color">
      <div className="text-start ps-2 sidebar-header">
        <a className="navbar-brand" href="/">
          <img
            src="../../icons8-bee-emoji-96.png"
            width="50"
            height="50"
            alt="Bee Emoji Icon"
          />
        </a>
      </div>
      <div className="text-end">
        <Link className="text-dec-none color-theme-one" to="/about">
          About
        </Link>
        <Link className="text-dec-none color-theme-one ps-2 pe-4" to="/product">
          Product
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavBar;
