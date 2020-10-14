import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import styles from "./Main.module.css";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.main__wrapper}>
            <Sidebar />
            <div className={styles.content}>
              <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/settings' component={Settings} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
