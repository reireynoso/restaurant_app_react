const setRestaurant = (restaurantsArray) => ({
    type: "SET_RESTAURANTS",
    payload: restaurantsArray
})

const addReview = (reviewObj) => ({
    type: "ADD_REVIEW",
    payload: reviewObj
})

const removeReview = reviewObj => ({
    type: "REMOVE_REVIEW",
    payload: reviewObj
})

const addRating = (dish, restaurantId) => ({
    type: "RATED_DISH",
    payload: {
        dish,
        restaurantId
    }
})

const fetchRestaurants = () => dispatch => {
    fetch(`${process.env.REACT_APP_URL}/restaurants`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        dispatch(setRestaurant(data))
    })
}

const postReview = (restaurant_id, comment) => dispatch => {
    return fetch(`${process.env.REACT_APP_URL}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            restaurant_id,
            comment
        })
    })
    .then(res => res.json())
    .then(reviewObj => dispatch(addReview(reviewObj)))
}

const deleteReview = review => dispatch => {
    return fetch(`${process.env.REACT_APP_URL}/reviews/${review.id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.errors){
            return data.errors
        }
        dispatch(removeReview(review))
    })
}

const rateDish = (dishId, rating, restaurantId) => dispatch => {
    const parsedDishId = parseInt(dishId)
    return fetch(`${process.env.REACT_APP_URL}/ratings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            parsedDishId,
            rating
        })
    })
    .then(resp => resp.json())
    .then(dish => {
        // console.log(dish)
        dispatch(addRating(dish, restaurantId))
    })
// console.log(dish)
}

export default {
    fetchRestaurants,
    postReview,
    deleteReview,
    rateDish
}