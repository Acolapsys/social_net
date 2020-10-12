import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.profile}>

      <div className={styles.content__banner}></div>
      <div className={styles.content__info}>ava + info</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
