import React, { Component } from "react";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/reducers/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

class DialogsContainer extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          let state = store.getState();
          const addMessage = () => {
            store.dispatch(sendMessageActionCreator());
          };
          const updateMessageBody = (text) => {
            store.dispatch(updateNewMessageBodyActionCreator(text));
          };
          return (
            <Dialogs
              updateMessageBody={updateMessageBody}
              addMessage={addMessage}
              dialogsPage={state.dialogsPage}
            />
          );
        }}
      </StoreContext.Consumer>
    );
  }
}

export default DialogsContainer;
