import React, { Component } from "react";
import styles from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.wrapper}></div>
      </footer>
    );
  }
}

export default Footer;
