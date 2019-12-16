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

    const locationParams = () => `${name.split(" ").join("+")},${city},${state}`
    const {city, logo, media_image, name, postal_code, price_rating, state, street_address} = mapReducer.selectedPlace
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
                        frameborder="0"
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API}&q=${locationParams()}`} 
                        // allowfullscreen
                    >
                    </iframe>

                </div>

                <div style={{width: "75vw"}}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button className="ui button active">Menu</button>
                        <button className="ui button">Reviews</button>
                    </div>
                </div>
                </>
                :
                <div>
                    Loading
                </div>
                }
        </div>
    )
}

export default RestaurantPageComponent