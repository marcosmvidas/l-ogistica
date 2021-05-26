import React from "react";
import "./header.css";

const Header = ({ title }) => (
  <header>
    <h1>{title ? title : "Logistica"}</h1>
  </header>
);

export default Header;
