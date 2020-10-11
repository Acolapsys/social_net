import React from "react";
import Sidebar from './Sidebar'
import Profile from './Profile'
import './Main.css'

const Main = () => {
  return (
  <div className="main">
    <div className="wrapper">
      <div className="main__wrapper">
        <Sidebar />
        <Profile />
      </div>
    </div>
  </div>
  )};

export default Main;
