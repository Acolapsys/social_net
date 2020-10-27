import React, { Component } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts"

class MyPostsContainer extends Component {

  addPost = () => {
    this.props.dispatch(addPostActionCreator());
  };
  changePostText = (text) => {
    this.props.dispatch(updateNewPostTextActionCreator(text));
  };
  render() {
    return (
      <MyPosts
        changePostText={this.changePostText}
        addPost={this.addPost}
        postData={this.props.state.profilePage.postData}
        newPostText={this.props.state.newPostText}
      />
    );
  }
}

export default MyPostsContainer;
