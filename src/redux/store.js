import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import sidebarReducer from './reducers/sidebarReducer'



const store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postData: [
                { id: 1, message: "Hi, how r you?", countLikes: 25 },
                { id: 2, message: "I'm 16", countLikes: 13 },
                { id: 3, message: "Where are you from?", countLikes: -3 },
            ],
            newPostText: "New post"
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('State was changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;

    },
    getState() {
        return this._state
    },
    setState(state) {
        this._state = state

    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);

    }

}



export default store;