import React, { Component } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext'

class MyPostsContainer extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          let state = store.getState();
          const addPost = () => {
            store.dispatch(addPostActionCreator());
          };
          const changePostText = (text) => {
            store.dispatch(updateNewPostTextActionCreator(text));
          };
          return (
            <MyPosts
              changePostText={changePostText}
              addPost={addPost}
              postData={state.profilePage.postData}
              newPostText={state.newPostText}
            />
          );
        }}
      </StoreContext.Consumer>
    );
  }
}

export default MyPostsContainer;
