import React from "react";
import ContentHeader from './ContentHeader'

const Profile = () => {
  return (
    <section className="content">
      <ContentHeader />
      <div className="content__banner"></div>
      <div className="content__info">ava + info</div>
      <div className="content__new">
        My posts
        <div className="content__new-post">New post</div>
      </div>
      <div className="content__posts">
        <div className="content__post">Post 1</div>
        <div className="content__post">Post 2</div>
      </div>
    </section>
  );
};

export default Profile;
