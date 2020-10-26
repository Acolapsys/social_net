import React, { Component } from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {
  
  render() {
    return (
      <div className={styles.profile}>
        <ProfileInfo />
        <MyPosts
          postData={this.props.profilePage.postData}
          newPostText={this.props.profilePage.newPostText}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}

export default Profile;
