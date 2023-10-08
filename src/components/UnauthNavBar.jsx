import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const UnauthNavBar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

  };

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control me-2 nav-input"
            aria-label="Password Input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="btn color-theme-3"
            to="/Home"
            onClick={handleLogin}
          >
            Submit
          </button>
        </form>
      </div>
    </nav>
  );
};

export default UnauthNavBar;
