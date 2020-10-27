import React, { Component } from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {
  
  render() {
    return (
      <div className={styles.profile}>
        <ProfileInfo />
        <MyPostsContainer/>
      </div>
    );
  }
}

export default Profile;
