const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState = {
    postData: [
        { id: 1, message: "Hi, how r you?", countLikes: 25 },
        { id: 2, message: "I'm 16", countLikes: 13 },
        { id: 3, message: "Where are you from?", countLikes: -3 },
    ],
    newPostText: "New post"
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case (ADD_POST): {
            return {
                ...state, 
                postData: [...state.postData, {
                    id: 5,
                    message: state.newPostText,
                    countLikes: 0
                }],
                newPostText: ''
            }
        }
        case (UPDATE_NEW_POST_TEXT): {
            return { ...state, newPostText: action.newText }
        }
        default: {
            return state
        }
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer