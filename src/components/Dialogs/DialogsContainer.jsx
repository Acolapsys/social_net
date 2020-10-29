
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageBody: (text) => {dispatch(updateNewMessageBodyActionCreator(text))},
    addMessage: () => {dispatch(sendMessageActionCreator())}

  }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
