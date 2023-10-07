import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import AuthHome from "./components/AuthHome";
// import UnauthHome from "./components/Unauthome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthHome />} />
      {/* <Route path="/" element={<UnauthHome />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
