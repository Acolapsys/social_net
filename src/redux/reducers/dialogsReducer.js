const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

const initialState = {
    dialogsData: [
        { id: 1, name: "Michael" },
        { id: 2, name: "Den" },
        { id: 3, name: "Devil Master" },
        { id: 4, name: "Sun Puppy" },
        { id: 5, name: "Bro" },
        { id: 6, name: "Best Hacker" },
        { id: 7, name: "New Age" },
        { id: 8, name: "Bob" },
    ],
    messagesData: [
        { id: 1, message: "How r u?" },
        { id: 2, message: "Fine, and you?" },
        { id: 3, message: "I'm best" },
        { id: 4, message: "Be happy" },
    ],
    newMessageBody: ""
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (UPDATE_NEW_MESSAGE_BODY):
            state.newMessageBody = action.newBody
            return state;
        case (SEND_MESSAGE):
            let newMessage = {
                id: 5,
                message: state.newMessageBody
            }
            state.messagesData.push(newMessage)
            state.newMessageBody = ''
            return state;
        default:
            return state
    }
}

export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: body
});
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer