import React, { useState } from "react";
import antennaImage from "../images/angtenna.png";
import router from "../images/router.png";
import scale from "../images/scale.png";
import { Link } from "react-router-dom";

const Product = () => {
  const [antennaQuantity, setAntennaQuantity] = useState(0);
  const [scaleQuantity, setScaleQuantity] = useState(0);
  const [gatewayQuantity, setGatewayQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (quantity) => {
    setCartCount(cartCount + quantity);
  };

  return (
    <>
      <nav className="navbar color-theme-2 fixed-top">
        <div className="text-start ps-2 sidebar-header">
          <a className="navbar-brand" href="/">
            <img
              src="../../icons8-bee-emoji-96.png"
              width="50"
              height="50"
              alt="Bee Emoji Icon"
            />
          </a>
        </div>
        <div>
          <Link className="text-dec-none color-theme-one" to="/about">
            About
          </Link>
          <Link className="text-dec-none color-theme-one ps-2" to="/product">
            Products
          </Link>
          <Link
            to="/checkout"
            className="text-dec-none color-theme-one ps-2 pe-4"
          >
            Cart ({cartCount})
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <h1 className="mt-5 mb-3 big-title text-center">
              <strong>Products</strong>
            </h1>
            <div>
              <div
                className="row height-change"
                style={{
                  border: "1px solid lightgrey",
                  borderRadius: "20px",
                  padding: "15px",
                  marginBottom: "20px",
                  height: "300px",
                  backgroundColor: "white",
                }}
              >
                <h3 className="mb-4">Standard Antenna</h3>
                <div className="col-6">
                  <img src={antennaImage} alt="Antenna" />
                </div>
                <div className="col-6">
                  <p className="text-start">
                    Includes GPS, Temperature, Humidity, and Buzz Sensors
                  </p>
                  <p className="text-start">Connects to Wi-Fi Router</p>
                  <p className="text-start">$65</p>
                  <div className="d-flex align-items-center">
                    <button
                      onClick={() => {
                        setAntennaQuantity(antennaQuantity + 1);
                        updateCartCount(1);
                      }}
                      className="btn color-theme-3 me-2"
                    >
                      +
                    </button>
                    <span>{antennaQuantity}</span>
                    <button
                      onClick={() => {
                        setAntennaQuantity(Math.max(0, antennaQuantity - 1));
                        updateCartCount(-1);
                      }}
                      className="btn color-theme-3 ms-2"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row height-change"
              style={{
                border: "1px solid lightgrey",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                height: "300px",
                backgroundColor: "white",
              }}
            >
              <h3 className="mb-4">Hive Scale</h3>
              <div className="col">
                <img src={router} alt="Antenna" />
              </div>
              <div className="col">
                <p className="text-start">Easy to Install into Hive</p>
                <p className="text-start">Plugs into Standard Antenna</p>
                <p className="text-start">$40</p>
                <div className="d-flex align-items-center">
                  <button
                    onClick={() => {
                      setScaleQuantity(scaleQuantity + 1);
                      updateCartCount(1);
                    }}
                    className="btn color-theme-3 me-2"
                  >
                    +
                  </button>
                  <span>{scaleQuantity}</span>
                  <button
                    onClick={() => {
                      setScaleQuantity(Math.max(0, scaleQuantity - 1));
                      updateCartCount(-1);
                    }}
                    className="btn color-theme-3 ms-2"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div
              className="row mb-4 height-change"
              style={{
                border: "1px solid lightgrey",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                height: "300px",
                backgroundColor: "white",
              }}
            >
              <h3 className="mb-4">High Volume Gateway</h3>
              <div className="col">
                <img src={scale} alt="Antenna" />
              </div>
              <div className="col">
                <p className="text-start">
                  Supports over 1000 Standard Antennas
                </p>
                <p className="text-start">Low Power Radio Technologies</p>
                <p className="text-start">$200</p>
                <div className="d-flex align-items-center">
                  <button
                    onClick={() => {
                      setGatewayQuantity(gatewayQuantity + 1);
                      updateCartCount(1);
                    }}
                    className="btn btn me-2 color-theme-3"
                  >
                    +
                  </button>
                  <span>{gatewayQuantity}</span>
                  <button
                    onClick={() => {
                      setGatewayQuantity(Math.max(0, gatewayQuantity - 1));
                      updateCartCount(-1);
                    }}
                    className="btn ms-2 color-theme-3"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
