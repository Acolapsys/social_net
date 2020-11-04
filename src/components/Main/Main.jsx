import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProfileContainer from "../Profile/ProfileContainer";
import styles from "./Main.module.css";
import DialogsContainer from "../Dialogs/DialogsContainer";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import { Route } from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.main__wrapper}>
            <Sidebar />
            <div className={styles.content}>
              <Route path="/profile/:userId?" component={ProfileContainer} />
              <Route path="/dialogs" component={DialogsContainer} />
              <Route path="/users" component={UsersContainer} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
