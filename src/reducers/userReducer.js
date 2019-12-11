const userReducer = (state = {
    loggedIn: false,
    user: {},
    loginErrors: []
}, {type, payload}) => {
    switch(type){
        case "SET_USER":
            return {
                ...state,
                loggedIn: true,
                user: payload
            }
        case "SET_ERRORS":
            return {
                ...state,
                loginErrors: payload
            }
        case "EMPTY_ERRORS":
            return {
                ...state,
                loginErrors: []
            }
        default: return state
    }
}

export default userReducer