import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="w-full px-6 py-5">
      <Logo imgwidth={"100px"}/>
    </div>
  );
}

export default Navbar;
