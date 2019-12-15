import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import mapActions from '../actions/mapActions'

const RestaurantPageComponent = (props) => {
    const mapReducer = useSelector(state => state.mapReducer)
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

    const {city, logo, media_image, name, postal_code, price_rating, state, street_address} = mapReducer.selectedPlace
    // console.log(mapReducer.selectedPlace)
    return(
        <div style={{padding: "2.5%"}} className="ui container">
            <div style={{display: "flex"}}>
                <div>
                    <img style={{height: "80px", width: "80px"}} src={logo}></img>
                </div>
                <div className="restaurant-info">
                    <h2>{name}</h2>
                    <p>{street_address}</p>
                    <p>{city}, {state}, {postal_code}</p>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default RestaurantPageComponent