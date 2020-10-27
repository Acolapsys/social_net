import React, { Component } from "react";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/reducers/dialogsReducer";
import Dialogs from './Dialogs'

class DialogsContainer extends Component {
  addMessage = () => {
    this.props.dispatch(sendMessageActionCreator());
  };
  updateMessageBody = (text) => {
    this.props.dispatch(updateNewMessageBodyActionCreator(text));
  };
  

  render() {
    debugger
    
    return (
      <Dialogs updateMessageBody={this.updateMessageBody} addMessage={this.addMessage} dialogsPage={this.props.state.dialogsPage}/>
    );
  }
}

export default DialogsContainer;
