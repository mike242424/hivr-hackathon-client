import React from "react";
import AuthNavBar from "./AuthNavBar";

const AuthHome = () => {
  const hives = [
    {
      id: 1,
      name: "Frontyard",
      location: "Charleston, SC",
      numOfDeeps: 2,
      queenAcceptanceDate: "02/07/22",
      data: [
        {
          time: "10 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
        {
          time: "20 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
        {
          time: "30 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
        {
          time: "40 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
        {
          time: "50 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
        {
          time: "60 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
      ],
    },
    {
      id: 2,
      name: "Backyard",
      location: "Charleston, SC",
      numOfDeeps: 1,
      queenAcceptanceDate: "04/13/22",
      data: [
        {
          time: "10 minutes",
          temp: 50,
          buzzFactor: 0.6,
          honeyLevel: 76,
        },
        {
          time: "20 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
        {
          time: "30 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
        {
          time: "40 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
        {
          time: "50 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
        {
          time: "60 minutes",
          temp: 66,
          buzzFactor: 1,
          honeyLevel: 80,
        },
      ],
    },
  ];

  return (
    <>
      <AuthNavBar />
      <div className="container text-center">
        <h1 className="mt-5 mb-5">
          <strong>Hivri</strong>
        </h1>
        <button
          className="btn"
          style={{ backgroundColor: "rgb(49, 47, 23)", color: 'white'}}
        >
          Add Hive
        </button>
        <div className="row">
          {hives.map((hive) => {
            return (
              <div className="col-md-6" key={hive.id}>
                <section>
                  <div className="card" style={{ backgroundColor: "#e5bd3f" }}>
                    <h1>
                      <strong>Name: </strong>
                      {hive.name}
                    </h1>
                    <p>
                      <strong>Current Temperature: </strong>
                      {hive.data[0].temp} F
                    </p>
                    <p>
                      <strong>Current Buzz Factor: </strong>
                      {hive.data[0].buzzFactor * 100}
                    </p>
                    <p>
                      <strong>Current Honey Level: </strong>
                      {hive.data[0].honeyLevel}%
                    </p>
                    {/* <p>
                      <strong>Location: </strong>
                      {hive.location}
                    </p>
                    <p>
                      <strong>Number of Deeps: </strong>
                      {hive.numOfDeeps}
                    </p>
                    <p>
                      <strong>Queen Acceptance Date: </strong>
                      {hive.queenAcceptanceDate}
                    </p> */}
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AuthHome;
