const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SHOW_MORE = "SHOW-MORE"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"


const initialState = {
    users: [ ],
    pageSize: 8,
    totalUsersCount: 50,
    currentPage: 1, 
    isFetching: false

}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case SHOW_MORE:
            return { ...state }
        case SET_USERS:
            return { ...state, users: [...action.newUsers], totalUsersCount: action.totalUsersCount }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.fetching}
        default: return state
    }


}



export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const showMore = () => ({ type: SHOW_MORE })
export const setUsersAC = (newUsers, totalUsersCount) => ({ type: SET_USERS, newUsers, totalUsersCount })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage })
export const toggleIsFetchingAC = (fetching) => ({type: TOGGLE_IS_FETCHING, fetching})


export default usersReducer