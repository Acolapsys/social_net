import React, { Component } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: ''
    }
  }
  newPostElement = React.createRef();
  addPost = () => {
    const text = this.newPostElement.current.value;
    alert(text)
    

  }
  onPostInput = (e) => {
    this.setState({newPost: e.target.value})
  }
  render() {
    return (
      <div>
        <div className={styles.content__new}>
          <h2 className={styles.content__title}> My posts </h2>
          <div className={styles.content__newpost}>
            <div>
              <textarea name="newPost" id="newPost" cols="30" rows="3" ref={this.newPostElement}/>
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
