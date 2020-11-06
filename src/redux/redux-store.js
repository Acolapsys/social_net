import {createStore, combineReducers} from 'redux'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import sidebarReducer from './reducers/sidebarReducer'
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
const store = createStore(reducers)
window.store = store


export default store