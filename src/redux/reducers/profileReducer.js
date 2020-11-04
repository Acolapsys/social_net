const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

const initialState = {
    postData: [
        { id: 1, message: "Hi, how r you?", countLikes: 25 },
        { id: 2, message: "I'm 16", countLikes: 13 },
        { id: 3, message: "Where are you from?", countLikes: -3 },
    ],
    newPostText: "New post",
    profile: null
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
        case (SET_USER_PROFILE): {
            return { ...state, profile: action.profile }
        }
        default: {
            return state
        }
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, 
    profile
});


export default profileReducer