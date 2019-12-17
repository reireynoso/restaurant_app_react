const restaurantReducer = (state = [], {type, payload}) => {
    switch(type){
        case "SET_RESTAURANTS":
            return payload
        case "ADD_REVIEW":
            // debugger
            const reviewAdded = state.map(restaurant => {
                if(restaurant.id === payload.restaurant_id){
                    restaurant.reviews = [payload, ...restaurant.reviews]
                }
                return restaurant
            })
            return reviewAdded
        default: return state
    }
}

export default restaurantReducer