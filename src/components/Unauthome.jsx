import React from "react";
import UnauthNavBar from "./UnauthNavBar";

const UnauthHome = () => {
  return (
    <>
      <UnauthNavBar />
      <div className="container text-center">
        <div className="row">
          <div className="col-8 offset-2">
            <h1 className="mt-5">
              <strong>Welcome to Hivr</strong>
            </h1>
            <p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnauthHome;
