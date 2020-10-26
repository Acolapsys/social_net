import React, { Component } from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/reducers/dialogsReducer";

class Dialogs extends Component {
  addMessage = () => {
    const text = this.props.dialogsPage.newMessageBody;
    this.props.dispatch(sendMessageActionCreator(text));
  };
  updateMessageBody = (e) => {
    let text = e.target.value;
    this.props.dispatch(updateNewMessageBodyActionCreator(text));
  };

  render() {
    return (
      <div className={styles.dialogs}>
        <h2 className={styles.dialogsTitle}>Dialogs</h2>
        <div className={styles.dialogsItems}>
          {this.props.dialogsPage.dialogsData.map((dialog) => (
            <DialogItem name={dialog.name} id={dialog.id} />
          ))}
        </div>
        <div className={styles.messages}>
          {this.props.dialogsPage.messagesData.map((el) => (
            <Message message={el.message} id={el.id} />
          ))}
        </div>
        <div className={styles.addMessage}>
          <textarea
            onChange={this.updateMessageBody}
            name="newMessage"
            id="newMessage"
            cols="30"
            rows="3"
            value={this.props.dialogsPage.newMessageBody}
          ></textarea>
          <button onClick={this.addMessage}>New message</button>
        </div>
      </div>
    );
  }
}

export default Dialogs;
