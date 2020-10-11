import React from "react";
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <div className={styles.content__new}>
        <h2 className={styles.content__title}> My posts </h2>
        <div className={styles.content__newpost}>New post</div>
      </div>
      <div className={styles.content__posts}>
        <Post message="Hi, how r you?" countLikes="25"/>
        <Post message="I'm 16" countLikes="13"/>
        <Post message="Where are you from?" countLikes="-3"/>
      </div>
    </div>
  );
};

export default MyPosts;
