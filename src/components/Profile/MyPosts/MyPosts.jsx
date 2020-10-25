import React, { Component } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  newPostElement = React.createRef();
  addPost = () => {
    this.props.addPost();
    
  }
  changePostText = () => {
    let text = this.newPostElement.current.value;
    this.props.updateNewPostText(text)
  }
  render() {
    return (
      <div>
        <div className={styles.content__new}>
          <h2 className={styles.content__title}> My posts </h2>
          <div className={styles.content__newpost}>
            <div>
              <textarea onChange={this.changePostText} name="newPost" id="newPost" cols="30" rows="3" ref={this.newPostElement} value={this.props.newPostText}/>
            </div>
            <div>
              <button onClick={this.addPost}>Add post</button>
            </div>
          </div>
        </div>
        <div className={styles.content__posts}>
          {this.props.postData.map((post) => (
            <Post
              message={post.message}
              id={post.id}
              countLikes={post.countLikes}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MyPosts;
