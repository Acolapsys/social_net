import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Social Net</div>
      <div className={styles.loginBlock}>
        {props.data.isAuth ? (
          <span>
            {props.data.login} <Link to="/login">(Sign out)</Link>
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
