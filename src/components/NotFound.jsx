import React from "react";

const NotFound = () => {
  return (
    <>
      <nav className="navbar color-theme-2 fixed-top">
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
      </nav>
      <div className="container text-center">
        <div className="row">
          <div className="col-8 offset-2">
            <h1 className="mt-5 mb-3">
              <strong>404 Page Not Found</strong>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
