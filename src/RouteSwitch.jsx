import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Profile from "./Profile";
import Catalog from "./Pages/Catalog"
import React from "react"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Catalog" element={<Catalog/>}/>
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;