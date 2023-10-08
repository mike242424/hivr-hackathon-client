import React from "react";
import AuthNavBar from "./AuthNavBar";
import bee from "../images/about-bee.png";

const About = () => {
  return (
    <>
      <AuthNavBar />
      <div className="container text-center">
        <div className="row">
          <div className="col-9 offset-1 ms-4">
            <h1 className="mt-5 big-title">
              <strong>About</strong>
            </h1>
            <div className="big-text col-8 offset-2">
              At Hivr, we are passionate about harnessing the power of
              technology to drive positive change for our planet, from smart
              beehive monitoring systems that support pollinator conservation
              to sustainable agricultural solutions that promote eco-friendly
              farming practices. Hivr is at the forefront of the green
              technology revolution. Together we can make a real and lasting
              impact one innovative solution at a time.
            </div>
          </div>
          <div className="col-1">
            <img
              src={bee}
              alt="Smug Bee"
              style={{ height: "400px", width: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
