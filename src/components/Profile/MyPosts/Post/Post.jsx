import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.content__post}>
      <img
        className={styles.avatar}
        src="https://psihter.ru/wp-content/uploads/2017/12/starik-portret-trubka-shlyapa.jpg"
        alt="Avatar"
      />
      
      {props.message}
      <div className={styles.likes}>
        <span className={styles.countLikes}>Likes {props.countLikes}</span>
      </div>
    </div>
  );
};

export default Post;
