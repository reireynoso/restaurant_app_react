import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import mapActions from '../actions/mapActions'
import restaurantActions from '../actions/restaurantActions'
import {Rating} from 'semantic-ui-react'

const RestaurantPageComponent = (props) => {
    const [view, setView] = useState("menu")
    const [comment, setComment] = useState("")
    const mapReducer = useSelector(state => state.mapReducer)
    const user = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const restaurantReducer = useSelector(state => state.restaurantReducer)
    const currentPath = props.location.pathname.split("/").splice(-1)[0].split("-").join(" ")

    useEffect(() => {
        const currentRestaurant = restaurantReducer.find(restaurant => restaurant.name === currentPath)
        // console.log(currentRestaurant)
        if(currentRestaurant){
            dispatch(mapActions.setMarker(currentRestaurant))
        }
        // console.log(restaurantReducer)
    }, [restaurantReducer])

    const locationParams = () => `${name.split(" ").join("+").split("&").join("and")},${city},${state}`
    //also check for & and replace with and to avoid param issues
        
    const handleReviewSubmit = (e) => {
        e.preventDefault()
        dispatch(restaurantActions.postReview(id, comment))
        setComment("")
    }

    const handleReviewRemove = (review) => {
        // console.log(review)
        dispatch(restaurantActions.deleteReview(review))
    }

    const handleRateDish = (e, {rating}) => {
        // debugger
        const dishId = e.target.parentElement.dataset.id //Grab Dish ID through dataset
        dispatch(restaurantActions.rateDish(dishId, rating))
    }
    
    const {id, city, logo, media_image, name, postal_code, price_rating, state, street_address, dishes, reviews} = mapReducer.selectedPlace
    // console.log(mapReducer.selectedPlace)
    return(
        <div style={{padding: "2.5%", height:"85vh", display:"flex"}}>
                {
                city !== undefined ?
                <>
                <div style={{width: "35vw"}}>
                    <div style={{display:"flex", justifyContent: "space-around"}}>
                        <div>
                            <img style={{height: "80px", width: "80px"}} src={logo}></img>
                        </div>

                        <div className="restaurant-info">
                            <h2>{name}</h2>
                            <p>{street_address}</p>
                            <p>{city}, {state}, {postal_code}</p>
                        </div>
                    </div>

                    <iframe
                        style={{border: "0", paddingTop: "3%"}}
                        width="100%"
                        height="350px"
                        frameBorder="0"
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API}&q=${locationParams()}`} 
                        // allowfullscreen
                    >
                    </iframe>

                </div>

                <div style={{width: "75vw", padding: "2.5%", overflowY: "scroll"}}>
                    <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button onClick={() => setView("menu")} className="ui button">Menu</button>
                        <button onClick={() => setView("reviews")} className="ui button">Reviews</button>
                    </div>

                    <div>
                        <h1>{view === "menu" ? "Menu" : "Reviews"}</h1>
                        {
                            view === "menu" ? 
                            dishes.map(dish => {
                                console.log(dish)
                                return <div key={dish.id} className="ui segment">
                                <h4 style={{display: "flex", justifyContent:"space-between"}}>
                                    <span>{dish.name}</span>
                                    <span>${(dish.price * 0.01).toFixed(2)}</span>
                                </h4>

                                <Rating icon='star' data-id={dish.id} onRate={handleRateDish} defaultRating={2.7} maxRating={5} />
                                <p>{dish.description.length === 0 ? "No description." : dish.description}</p>
                            </div>
                            })
                            :
                            <div>
                                <form onSubmit={handleReviewSubmit} className="ui form">
                                    <div className="field">
                                        <textarea name="comment" onChange={(e) => setComment(e.target.value)} required placeholder="Review the restaurant" rows="2"></textarea>
                                    </div>
                                    <button className="ui blue button" type="submit" value="Submit">Review</button>
                                </form>
                                {
                                    reviews.map(review => {
                                        // console.log(review)
                                        // console.log(user)
                                    return <div key={review.id} className="ui segment">
                                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                            <p>{review.comment}</p>
                                            {/* <button className="ui red button">Remove Comment</button> */}
                                            <div onClick={() => handleReviewRemove(review)}>
                                                {
                                                    user.user.id === review.user.id ? 
                                                    <i className="trash large icon"></i>
                                                    :
                                                    null
                                                }
                                            </div>
                                        </div>
                                        <b>By: {review.user.username}</b>
                                    </div>})
                                }
                            </div>
                        }
                    </div>
                    </div>
                </div>
                </>
                :
                <div style={{padding: "2.5%", height:"85vh", display:"flex"}}>
                    Loading
                </div>
                }
        </div>
    )
}

export default RestaurantPageComponent