import React from "react";
import UnauthNavBar from "./UnauthNavBar";
import welcomePage from '../images/welcome-page.png';

const UnauthHome = () => {
  return (
    <div>
      <UnauthNavBar />
      <img
        className="margin-top"
        src={welcomePage}
        alt="Welcome Page"
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
};

export default UnauthHome;
