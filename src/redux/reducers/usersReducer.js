const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SHOW_MORE = "SHOW-MORE"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"


const initialState = {
    users: [
        // { id: 1, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: false, fullName: "Admin", status: 'On the wave', location: { city: 'Chusovoy', country: 'Russia' } },
        // { id: 2, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: false, fullName: "Eleonora", status: 'I am stylist', location: { city: 'Chusovoy', country: 'Russia' } },
        // { id: 3, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: true, fullName: "Dmitry", status: 'Boom Boom', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 4, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: false, fullName: "Alexey", status: 'Reading manual', location: { city: 'Sochi', country: 'Russia' } },
        // { id: 5, avatarUrl: 'https://i.pinimg.com/originals/8a/34/48/8a3448467d01b7bcf1eb713b452766f2.jpg', followed: true, fullName: "Sergey", status: 'Coding', location: { city: 'New York', country: 'USA' } },
    ],
    pageSize: 8,
    totalUsersCount: 50,
    currentPage: 1

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
        default: return state
    }


}



export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const showMore = () => ({ type: SHOW_MORE })
export const setUsersAC = (newUsers, totalUsersCount) => ({ type: SET_USERS, newUsers, totalUsersCount })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage })


export default usersReducer