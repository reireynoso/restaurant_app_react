const setRestaurant = (restaurantsArray) => ({
    type: "SET_RESTAURANTS",
    payload: restaurantsArray
})

const fetchRestaurants = () => dispatch => {
    fetch(`${process.env.REACT_APP_URL}/restaurants`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        dispatch(setRestaurant(data))
    })
}

export default {
    fetchRestaurants
}