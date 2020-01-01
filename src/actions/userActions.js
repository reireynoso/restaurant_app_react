const setUser = (userObj) => ({
    type: "SET_USER",
    payload: userObj
})

const setErrors = (errorsArr) => ({
    type: "SET_ERRORS",
    payload: errorsArr
})

const emptyErrors = () => ({
    type: "EMPTY_ERRORS"
})

const logOutUser = () => ({
    type: "UNSET_USER"
})

const setUserReviewsAndRatings = userInfo => ({
    type: "SET_USER_REVIEWS_RATINGS",
    payload: userInfo
})


const fetchAutoLogin = () => dispatch => {
    const token = localStorage.getItem("token")
    fetch(`${process.env.REACT_APP_URL}/auto_login`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(userData => {
        // console.log(userData)
        if(userData.errors){
            return userData.errors
        }
        dispatch(setUser(userData))
    })
}

const fetchUser = (userCredentialsObj, route) => dispatch => {
    const url = (route === 'login' ? 'login' : 'users')
    const credentials = (route === 'login' ? JSON.stringify(userCredentialsObj) : userCredentialsObj)
    // debugger
    const secondArgument = (
        route === 'login' ? 
        {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: credentials
        }
        :
        {
            method: "POST",
            body: credentials
        }
    )
    return fetch(`${process.env.REACT_APP_URL}/${url}`, secondArgument)
    .then(res => res.json())
    .then(userData => {
        if(userData.errors){
            return dispatch(setErrors(userData.errors))
        }
        localStorage.setItem("token", userData.token)
        dispatch(setUser(userData.user))
    })
}

const updateUser = (updatedInfo, containsImage, isPassword) => dispatch => {
    const token = localStorage.getItem("token")
    const path = isPassword ? `/change_password` : '/update_user'
    const secondArgument = (
        containsImage ? 
        {
            method: "PATCH",
            body: updatedInfo
        }
        :
        {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        }
    )
    if(token){
        return fetch(`${process.env.REACT_APP_URL}/${path}`, secondArgument)
        .then(res => res.json())
        .then(data => console.log(data))
    }
}

const fetchReviewAndRatedDish = () => dispatch => {
    const token = localStorage.getItem("token")
    if(token){
        return fetch(`${process.env.REACT_APP_URL}/user_info`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        //data => {reviews: [], ratings:} of current user
        .then(data => dispatch(setUserReviewsAndRatings(data)))
    }
    else{
        console.log("Login/Signup first")
    }
}

export default {
    fetchUser,
    emptyErrors,
    logOutUser,
    fetchAutoLogin,
    fetchReviewAndRatedDish,
    updateUser
}