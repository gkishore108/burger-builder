import React from "react";
import logo from "../../assests/images/bblogo.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Burger Builder" />
    </div>
  );
};

export default Logo;
