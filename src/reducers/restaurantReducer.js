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
        case "RATED_DISH":
            //maps through list of all restaurant and finds matching restaurantId from payload. With match iterate through restaurants
            //dishes and find the one that changed average rating from response of API
            const ratingAdded = state.map(restaurant => {
                if(restaurant.id === payload.restaurantId){
                    restaurant.dishes.map(dish => {
                        if(dish.id === payload.dish.id){
                            dish.average_rating = payload.dish.average_rating
                        }
                        return dish
                    })
                }
                return restaurant
            })
            return ratingAdded
        default: return state
    }
}

export default restaurantReducer