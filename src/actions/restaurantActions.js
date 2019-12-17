const setRestaurant = (restaurantsArray) => ({
    type: "SET_RESTAURANTS",
    payload: restaurantsArray
})

const addReview = (reviewObj) => ({
    type: "ADD_REVIEW",
    payload: reviewObj
})

const fetchRestaurants = () => dispatch => {
    fetch(`${process.env.REACT_APP_URL}/restaurants`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        dispatch(setRestaurant(data))
    })
}

const  postReview = (restaurant_id, comment) => dispatch => {
    // debugger
    fetch(`${process.env.REACT_APP_URL}/reviews`, {
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

export default {
    fetchRestaurants,
    postReview
}