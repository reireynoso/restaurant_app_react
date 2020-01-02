const userReducer = (state = {
    loggedIn: false,
    user: {},
    loginErrors: [],
    updateErrors: [],
    updateSuccess: [],
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
                user: {},
                reviewedRestaurants: [],
                ratedDishes: []
            }
        case "SET_ERRORS":
            return {
                ...state,
                loginErrors: payload
            }
        case "EMPTY_ERRORS":
            return {
                ...state,
                loginErrors: [],
                updateErrors: []
            }
        case "SET_USER_REVIEWS_RATINGS":
            return {
                ...state,
                reviewedRestaurants: payload.reviews,
                ratedDishes: payload.ratings
            }
        case "SET_UPDATE_ERRORS":
            return {
                ...state,
                updateErrors: payload
            }
        case "SET_UPDATED_USER":
            return {
                ...state,
                user: payload.user,
                updateSuccess: payload.success
            }
        case "SET_UPDATE_SUCCESS":
            return {
                ...state,
                updateSuccess: payload
            }
        case "CLEAR_UPDATE_SUCCESS":
            return {
                ...state,
                updateSuccess: []
            }
        default: return state
    }
}

export default userReducer