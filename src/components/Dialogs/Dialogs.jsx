import React, { Component } from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class Dialogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ''
    }
  }
  newMessageElement = React.createRef();
  addMessage = () => {
    const text  = this.newMessageElement.current.value;
    alert(text);
    

  }
  render() {
    return (
      <div className={styles.dialogs}>
        <h2 className={styles.dialogsTitle}>Dialogs</h2>
        <div className={styles.dialogsItems}>
          {this.props.state.dialogsData.map((dialog) => (
            <DialogItem name={dialog.name} id={dialog.id} />
          ))}
        </div>
        <div className={styles.messages}>
          {this.props.state.messagesData.map((el) => (
            <Message message={el.message} id={el.id} />
          ))}
        </div>
        <div className={styles.addMessage}>
          <textarea name="newMessage" id="newMessage" cols="30" rows="3" ref={this.newMessageElement}></textarea>
          <button onClick={this.addMessage}>New message</button>
        </div>
      </div>
    );
  }
}

export default Dialogs;
