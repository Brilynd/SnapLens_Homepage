import SnapLogo from "../snapbookTrans.png";
import "./Navbar.css";
import { useState } from "react";
import React from "react"
const Navbar = () => {
  const [responseToggled, setResponseToggled] = useState(false);
  return (
    <div className="Nav-Wrapper">
      <ul className="Flex-Wrapper">
        <li>
          <img src={SnapLogo} alt="" />
        </li>
        <li>Home</li>
        <li>Catalog</li>
        <li>Marketing</li>
        <li>Partnerships</li>
      </ul>
      <ul className="Nav-Display">
        <li>
          <img src={SnapLogo} alt="" />
        </li>
        <input class="menu-btn" type="checkbox" id="menu-btn" onClick={(e)=>setResponseToggled(!responseToggled)}/>
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>

      </ul>
      <ul className="Menu-Display" style={{ display: responseToggled ? "block" : "none" }}>
          <li>Home</li>
          <li>Catalog</li>
          <li>Marketing</li>
          <li>Partnerships</li>
        </ul>
    </div>
  );
};
export default Navbar;
