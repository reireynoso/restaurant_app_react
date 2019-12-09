import React from 'react'
import MapContainer from './MapContainer'
import {useSelector, useDispatch} from 'react-redux'
import mapActions from '../actions/mapActions'


const MainRestaurantComponent = () => {
    const restaurants = useSelector(state => state.restaurantReducer)
    const dispatch = useDispatch()

    
    return (
        <div style={{display: "flex", margin: 0, padding: 0, height: "85vh"}}>
          <div style={{width: "20vw", overflow: "scroll"}}>
            List of Restaurants
            {
                restaurants.map(restaurant => 
                <div onClick={() => dispatch(mapActions.setCenter({lat: restaurant.latitude, lng: restaurant.longitude}))} className="ui segment" key={restaurant.id}>
                  {restaurant.name}
                </div>)
            }
          </div>

          <div style={{width: "80vw"}}>
              <MapContainer />
          </div>
        </div>
    )
}

export default MainRestaurantComponent