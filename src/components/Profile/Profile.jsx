import React from "react";
import ContentHeader from './ContentHeader/ContentHeader'
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <section className={styles.content}>
      <ContentHeader />
      <div className={styles.content__banner}></div>
      <div className={styles.content__info}>ava + info</div>
      <MyPosts />
    </section>
  );
};

export default Profile;
