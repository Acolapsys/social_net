
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changePostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
    addPost: () => {dispatch(addPostActionCreator())}

  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
