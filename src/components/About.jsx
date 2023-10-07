import React from "react";
import AuthNavBar from "./AuthNavBar";

const About = () => {
  return (
    <>
      <AuthNavBar />
      <div className="container text-center">
        <div className="row">
          <div className="col-8 offset-2">
            <h1 className="mt-5">
              <strong>About</strong>
            </h1>
            <div style={{ fontSize: "20px" }}>
              At Hivr we are passionate about harnessing the power of technology
              to drive positive change for our plant from smart bee-hive
              monitoring systems that support pollinator conservation to
              sustainable agricultural solutions that promote eco-friendly
              farming pratices. Hivr is at the forefront of the green technogy
              revolution. Together we can make a real and lasting impact one
              innovative solution at a time.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
