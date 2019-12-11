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


const fetchAutoLogin = () => dispatch => {
    const token = localStorage.getItem("token")
    fetch(`${process.env.REACT_APP_URL}/auto_login`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(userData => dispatch(setUser(userData)))
}

const fetchUser = (userCredentialsObj, route) => dispatch => {
    const url = (route === 'login' ? 'login' : 'users')
    return fetch(`${process.env.REACT_APP_URL}/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(userCredentialsObj)
    })
    .then(res => res.json())
    .then(userData => {
        if(userData.errors){
            return dispatch(setErrors(userData.errors))
        }
        localStorage.setItem("token", userData.token)
        dispatch(setUser(userData.user))
    })
}

export default {
    fetchUser,
    emptyErrors,
    logOutUser,
    fetchAutoLogin
}