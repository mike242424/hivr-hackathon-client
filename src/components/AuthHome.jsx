import React from "react";
import AuthNavBar from "./AuthNavBar";

const AuthHome = () => {
  return (
    <>
      <AuthNavBar />
      <div className="container text-center">
        <div className="row">
          <div className="col-8 offset-2">
            <h1 className="mt-5">
              <strong>Title</strong>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthHome;