import React, { useState } from "react";
import AuthNavBar from "./AuthNavBar";
import { Modal, Button } from "react-bootstrap";

const AuthHome = () => {
  const currentTime = new Date();
  const initialTime = new Date(currentTime);

  const [hives, setHives] = useState([
    {
      id: 1,
      name: "Frontyard",
      location: "Charleston, SC",
      numOfDeeps: 2,
      queensAgeInMonths: 3,
      data: [
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
      ],
    },
    {
      id: 2,
      name: "Backyard",
      location: "Charleston, SC",
      numOfDeeps: 1,
      queensAgeInMonths: 6,
      data: [
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
      ],
    },
  ]);

  const [hiveName, setHiveName] = useState("");
  const [hiveLocation, setHiveLocation] = useState("");
  const [numOfDeeps, setNumOfDeeps] = useState("");
  const [queensAgeInMonths, setQueenAcceptanceDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const generateData = (hiveData) => {
    if (hiveData && hiveData.length > 0) {
      return hiveData.map((entry, index) => {
        const newTime = new Date(initialTime);
        newTime.setMinutes(initialTime.getMinutes() + index * 10);

        return {
          ...entry,
          time: newTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      });
    } else {
      return [
        {
          time: currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: Math.floor(Math.random() * (90 - 40 + 1)) + 40,
          buzzFactor: Math.floor(Math.random() * 100),
          honeyLevel: Math.floor(Math.random() * 100),
        },
      ];
    }
  };

  const addHive = (e) => {
    e.preventDefault();
    const newHive = {
      id: hives.length + 1,
      name: hiveName,
      location: hiveLocation,
      numOfDeeps: numOfDeeps,
      queensAgeInMonths: queensAgeInMonths,
      data: generateData([]),
    };

    setHives([...hives, newHive]);

    setHiveName("");
    setHiveLocation("");
    setNumOfDeeps("");
    setQueenAcceptanceDate("");
    setShowModal2(false);
  };

  const openModal = (hive) => {
    setSelectedData(generateData(hive.data));
    setHiveName(hive.name);
    setHiveLocation(hive.location);
    setNumOfDeeps(hive.numOfDeeps);
    setQueenAcceptanceDate(hive.queensAgeInMonths);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setHiveName("");
    setHiveLocation("");
    setNumOfDeeps("");
    setQueenAcceptanceDate("");
  };

  const openModal2 = () => {
    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
    setHiveName("");
    setHiveLocation("");
    setNumOfDeeps("");
    setQueenAcceptanceDate("");
  };

  const update = () => {
    window.location.reload();
  };

  const temperatureColorClass = (temp) => {
    if (temp < 50 || temp > 80) {
      return "text-red"; // Apply red text color if below 50 or above 70
    }
    return "";
  };

  const buzzFactorColorClass = (buzzFactor) => {
    if (buzzFactor < 60) {
      return "text-red"; // Apply red text color if below 60
    }
    return "";
  };

  const honeyLevelColorClass = (honeyLevel) => {
    if (honeyLevel < 60) {
      return "text-red"; // Apply red text color if below 60
    }
    return "";
  };

  return (
    <>
      <AuthNavBar />
      <div className="container text-center" style={{ marginTop: "120px" }}>
        <h1 className="mb-3">
          <strong>Hivr</strong>
        </h1>
        <div className="row">
          <div className="col-6">
            <button
              type="submit"
              className="btn mb-5 mt-3 color-theme-3"
              style={{ backgroundColor: "rgb(49, 47, 23)", color: "white" }}
              onClick={openModal2}
            >
              Add Hive
            </button>
          </div>
          <div className="col-6">
            <button className="btn mb-5 mt-3 color-theme-3" onClick={update}>
              Update My Hives
            </button>
          </div>
        </div>
        <div className="row">
          {hives.map((hive) => (
            <div className="col-md-6" key={hive.id}>
              <section className="card mb-4" style={{ borderRadius: "20px" }}>
                <div className="p-4">
                  <h1 className="mb-4">
                    <strong>Name: </strong>
                    {hive.name}
                  </h1>
                  <p>
                    <span
                      className={temperatureColorClass(
                        hive.data && hive.data.length > 0
                          ? hive.data[0].temp
                          : 0
                      )}
                    >
                      <strong>Current Temperature: </strong>
                      {hive.data && hive.data.length > 0
                        ? hive.data[0].temp
                        : "N/A"}{" "}
                      F
                    </span>
                  </p>
                  <p>
                    <span
                      className={buzzFactorColorClass(
                        hive.data && hive.data.length > 0
                          ? hive.data[0].buzzFactor
                          : 0
                      )}
                    >
                      <strong>Current Buzz Factor: </strong>
                      {hive.data && hive.data.length > 0
                        ? hive.data[0].buzzFactor
                        : "N/A"}
                    </span>
                  </p>
                  <p>
                    <span
                      className={honeyLevelColorClass(
                        hive.data && hive.data.length > 0
                          ? hive.data[0].honeyLevel
                          : 0
                      )}
                    >
                      <strong>Current Honey Level: </strong>
                      {hive.data && hive.data.length > 0
                        ? hive.data[0].honeyLevel
                        : "N/A"}
                      %
                    </span>
                  </p>
                </div>

                <div className="pb-4">
                  <button
                    className="btn mb-2 color-theme-3"
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
                  <strong>Queens Age:</strong> {queensAgeInMonths} months
                </p>
              </div>
              <hr />
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
                      <strong>Buzz Factor:</strong> {entry.buzzFactor}
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
            className="color-theme-3"
            variant="secondary"
            onClick={closeModal}
            style={{ backgroundColor: "rgb(49, 47, 23)" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal2} onHide={closeModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Add Hive</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={addHive}>
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
              type="number"
              min={0}
              placeholder="Number of Deeps"
              value={numOfDeeps}
              onChange={(e) => setNumOfDeeps(e.target.value)}
              required
            />
            <input
              className="form-control mb-2"
              type="number"
              placeholder="Queens Age"
              value={queensAgeInMonths}
              onChange={(e) => setQueenAcceptanceDate(e.target.value)}
            />
            <button className="btn color-theme-3 mt-3" type="submit">
              Add My Hive
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="color-theme-3"
            variant="secondary"
            onClick={closeModal2}
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
