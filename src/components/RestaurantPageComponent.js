import React from 'react'
import {useSelector} from 'react-redux'

const RestaurantPageComponent = () => {
    const mapReducer = useSelector(state => state.mapReducer)
    const {city, logo, media_image, name, postal_code, price_rating, state, street_address} = mapReducer.selectedPlace
    console.log(mapReducer.selectedPlace)
    return(
        <div>
            <div>
                <img style={{height: "80px", width: "80px"}} src={logo}></img>
            </div>
        </div>
    )
}

export default RestaurantPageComponent