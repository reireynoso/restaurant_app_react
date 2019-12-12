import React from 'react'
import {useSelector} from 'react-redux'

const RestaurantPageComponent = () => {
    const mapReducer = useSelector(state => state.mapReducer)
    const {city, logo, media_image, name, postal_code, price_rating, state, street_address} = mapReducer.selectedPlace
    console.log(mapReducer.selectedPlace)
    return(
        <div>{city}</div>
    )
}

export default RestaurantPageComponent