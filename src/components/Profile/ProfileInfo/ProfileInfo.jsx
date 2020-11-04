import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  return !props.profile ? (
    <Preloader />
  ) : (
    <div>
      <div className={styles.content__banner}></div>
      <div className={styles.content__info}>
        <img src={props.profile.photos.large} alt="" />
        <div>
        <p>{props.profile.aboutMe}</p>
        <p>{props.profile.fullName}</p>
        
        <p>{props.profile.contacts.vk}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
