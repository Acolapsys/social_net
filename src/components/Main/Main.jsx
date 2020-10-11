import React from "react";
import Sidebar from '../Sidebar/Sidebar'
import Profile from '../Profile/Profile'
import styles from './Main.module.css'

const Main = () => {
  return (
  <div className={styles.main}>
    <div className={styles.wrapper}>
      <div className={styles.main__wrapper}>
        <Sidebar />
        <Profile />
      </div>
    </div>
  </div>
  )};

export default Main;
