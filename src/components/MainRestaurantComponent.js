import React from 'react'
import MapContainer from './MapContainer'
import {useSelector, useDispatch} from 'react-redux'
import mapActions from '../actions/mapActions'
import {Link} from 'react-router-dom'


const MainRestaurantComponent = () => {
    const restaurants = useSelector(state => state.restaurantReducer)
    const dispatch = useDispatch()

    const mouseOver = (e) => {
      e.target.style = 'display: flex; justify-content: space-between; background-color: #DCDCDC; transition: 0.1s ease-in;'
    }

    const mouseLeft = (e) => {
      e.target.style = 'display: flex; justify-content: space-between; background-color: white; transition: 0.1s ease-in'
    }

    return (
        <div style={{display: "flex", margin: 0, padding: 0, height: "85vh"}}>
          <div style={{width: "20vw", overflow: "scroll"}}>
            <h1>List of Restaurants</h1>
            {
                restaurants.map(restaurant => 
                <div
                  data-id={restaurant.id}
                  onClick={() => dispatch(mapActions.setMarker(restaurant))} 
                  className="ui segment" 
                  key={restaurant.id}
                  onMouseEnter={mouseOver}
                  onMouseLeave={mouseLeft}
                  style={{display: "flex", justifyContent: "space-between"}}
                >
                  {restaurant.name}
                
                  <Link to={`/restaurants/${restaurant.name}`}>
                    <i className="eye icon"></i>
                  </Link>
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