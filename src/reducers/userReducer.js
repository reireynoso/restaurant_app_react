const userReducer = (state = {
    loggedIn: false,
    user: {},
    loginErrors: [],
    reviewedRestaurants: [],
    ratedDishes: []
}, {type, payload}) => {
    switch(type){
        case "SET_USER":
            return {
                ...state,
                loggedIn: true,
                user: payload
            }
        case "UNSET_USER":
            localStorage.clear()
            return {
                ...state,
                loggedIn: false,
                user: {}
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
        case "SET_USER_REVIEWS_RATINGS":
            return {
                ...state,
                reviewedRestaurants: payload.reviews,
                ratedDishes: payload.ratings
            }
        default: return state
    }
}

export default userReducer