import axios from "axios";



const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': 'fcde1215-befa-4c9d-b8b6-ed231146228e'
    },
    withCredentials: true

})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(
        `users?page=${currentPage}&count=${pageSize}`
    ).then(response => response.data)
}

export const unfollowUser = (userId) => {
    return instance
        .delete(
            `follow/${userId}`
        ).then(response => response.data)
}


export const followUser = (userId) => {
    return instance
        .post(
            `follow/${userId}`
        ).then(response => response.data)
}

export const authMe = () => {
    return instance.get(`auth/me`).then(response => response.data)
}

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`).then(response => response.data)
}