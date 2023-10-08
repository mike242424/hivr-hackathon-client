import React from "react";
import UnauthHome from "./Unauthome";
import AuthHome from "./AuthHome";

const Home = () => {

  return (
    <>
      {localStorage.getItem("username") === null ||
      localStorage.getItem("password") === null ? (
        <UnauthHome />
      ) : (
        <AuthHome />
      )}
    </>
  );
};

export default Home;
