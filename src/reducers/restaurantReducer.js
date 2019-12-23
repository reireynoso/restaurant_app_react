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
        case "REMOVE_REVIEW":
            // debugger
            const reviewRemoved = state.filter(restaurant => {
                if(restaurant.id === payload.restaurant_id){
                    restaurant.reviews = restaurant.reviews.filter(review => review.id !== payload.id)
                }
                return restaurant
            })
            return reviewRemoved
        default: return state
    }
}

export default restaurantReducer