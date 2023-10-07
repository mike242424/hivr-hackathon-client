import React from "react";
import UnauthNavBar from "./UnauthNavBar";

const UnauthHome = () => {
  return (
    <>
      <UnauthNavBar />
      <div className="container text-center">
        <div className="row">
          <div className="col-8 offset-2">
            <h1 className="mt-5">Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ea
              at, impedit vel dicta consectetur unde molestiae cupiditate autem
              voluptatibus nostrum qui vero minus voluptatum! Enim recusandae
              iste non ratione magnam amet cupiditate officia. Ex vero odit est
              fugiat? Animi!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnauthHome;
