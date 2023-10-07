import React, { useState } from "react";
import AuthNavBar from "./AuthNavBar";
import { Modal, Button } from "react-bootstrap";

const AuthHome = () => {
  const [hives, setHives] = useState([
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
      ],
    },
  ]);

  const [hiveName, setHiveName] = useState("");
  const [hiveLocation, setHiveLocation] = useState("");
  const [numOfDeeps, setNumOfDeeps] = useState("");
  const [queenAcceptanceDate, setQueenAcceptanceDate] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const addHive = (e) => {
    e.preventDefault();
    const newHive = {
      id: hives.length + 1,
      name: hiveName,
      location: hiveLocation,
      numOfDeeps: numOfDeeps,
      queenAcceptanceDate: queenAcceptanceDate,
      data: [
        {
          time: "10 minutes",
          temp: 69,
          buzzFactor: 0.7,
          honeyLevel: 91,
        },
      ],
    };

    setHives([...hives, newHive]);

    setHiveName("");
    setHiveLocation("");
    setNumOfDeeps("");
    setQueenAcceptanceDate("");
  };

  const openModal = (hive) => {
    setSelectedData(hive.data);
    setHiveName(hive.name);
    setHiveLocation(hive.location);
    setNumOfDeeps(hive.numOfDeeps);
    setQueenAcceptanceDate(hive.queenAcceptanceDate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setHiveName("");
    setHiveLocation("");
    setNumOfDeeps("");
    setQueenAcceptanceDate("");
  };

  return (
    <>
      <AuthNavBar />
      <div className="container text-center">
        <h1 className="mt-5 mb-3">
          <strong>Hivr</strong>
        </h1>
        <div className="row">
          {hives.map((hive) => (
            <div className="col-md-6" key={hive.id}>
              <section className="card mb-4">
                <div className="p-4">
                  <h1 className="mb-4">
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
                </div>
                <div className="pb-4">
                  <button
                    className="btn mb-2 navbar-button"
                    style={{
                      backgroundColor: "rgb(49, 47, 23)",
                      color: "white",
                    }}
                    onClick={() => openModal(hive)}
                  >
                    Show More Data
                  </button>
                </div>
              </section>
            </div>
          ))}
        </div>
        <form onSubmit={addHive} className="mt-4 col-4 offset-4">
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Hive Name"
            value={hiveName}
            onChange={(e) => setHiveName(e.target.value)}
            required
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Hive Location"
            value={hiveLocation}
            onChange={(e) => setHiveLocation(e.target.value)}
            required
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Number of Deeps"
            value={numOfDeeps}
            onChange={(e) => setNumOfDeeps(e.target.value)}
            required
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Queen Age"
            value={queenAcceptanceDate}
            onChange={(e) => setQueenAcceptanceDate(e.target.value)}
          />
          <button
            type="submit"
            className="btn mt-2 mb-4 navbar-button"
            style={{ backgroundColor: "rgb(49, 47, 23)", color: "white" }}
          >
            Add Hive
          </button>
        </form>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>More Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedData && (
            <div>
              <div className="row">
                <p>
                  <strong>Name:</strong> {hiveName}
                </p>
                <p>
                  <strong>Location:</strong> {hiveLocation}
                </p>
                <p>
                  <strong>Number of Deeps:</strong> {numOfDeeps}
                </p>
                <p>
                  <strong>Queen Acceptance Date:</strong> {queenAcceptanceDate}
                </p>
              </div>

              {selectedData.map((entry, index) => (
                <div key={index} className="row">
                  <p>
                    <strong>Time:</strong> {entry.time}
                  </p>
                  <div className="col-6">
                    <p>
                      <strong>Temperature:</strong> {entry.temp} F
                    </p>
                    <p>
                      <strong>Buzz Factor:</strong> {entry.buzzFactor * 100}
                    </p>
                    <p>
                      <strong>Honey Level:</strong> {entry.honeyLevel}%
                    </p>
                  </div>
                  {index !== selectedData.length - 1 && <hr />}
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="navbar-button"
            variant="secondary"
            onClick={closeModal}
            style={{ backgroundColor: "rgb(49, 47, 23)" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AuthHome;
