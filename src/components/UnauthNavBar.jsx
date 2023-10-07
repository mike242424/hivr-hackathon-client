import React from "react";
import { Link, NavLink } from "react-router-dom";

const UnauthNavBar = () => {
  return (
    <nav className="navbar color-theme-2 fixed-top">
      <div className="text-start ps-2">
        <NavLink className="navbar-brand" to="/">
          <img
            src="../../icons8-bee-emoji-96.png"
            width="50"
            height="50"
            alt="Bee Emoji Icon"
          />
        </NavLink>
      </div>
      <div className="text-end col-xs-6">
        <form className="d-flex pe-4">
          <input
            type="text"
            className="form-control me-2 nav-input"
            aria-label="Username Input"
            placeholder="Username"
          />
          <input
            type="password"
            className="form-control me-2 nav-input"
            aria-label="Password Input"
            placeholder="Password"
          />
          <Link
            className="btn nav-button"
            style={{ backgroundColor: "rgb(49,47,23)", color: "white" }}
            to="/Home"
          >
            Submit
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default UnauthNavBar;
