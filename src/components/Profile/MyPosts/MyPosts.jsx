import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postData = [
    { id: 1, message: "Hi, how r you?", countLikes: 25 },
    { id: 2, message: "I'm 16", countLikes: 13 },
    { id: 3, message: "Where are you from?", countLikes: -3 },
  ];
  return (
    <div>
      <div className={styles.content__new}>
        <h2 className={styles.content__title}> My posts </h2>
        <div className={styles.content__newpost}>New post</div>
      </div>
      <div className={styles.content__posts}>
        {postData.map((post) => (
          <Post message={post.message} id={post.id} countLikes={post.countLikes} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
