import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {

    // inline css

    // add brandStyle object here

    // add logoText css object
  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/">
        <img src="/images/logo.png" alt="logo" />
        <span>Coders House</span>
      </Link>
    </nav>
  );
};

export default Navigation;
