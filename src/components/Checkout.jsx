import React from "react";
import AuthNavBar from "./AuthNavBar";

const Checkout = () => {
  return (
    <>
      <AuthNavBar />
      <div className="container text-center">
        <div className="row">
          <div className="col-9 offset-1">
            <h1 className="mt-5 big-title">
              <strong>Checkout</strong>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
