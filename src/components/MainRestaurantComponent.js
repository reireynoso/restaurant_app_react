import React, {useEffect} from 'react'
import MapContainer from './MapContainer'
import {useSelector, useDispatch} from 'react-redux'
import mapActions from '../actions/mapActions'
import {Link} from 'react-router-dom'


const MainRestaurantComponent = () => {
    const restaurants = useSelector(state => state.restaurantReducer)
    const mapReducer = useSelector(state => state.mapReducer)
    const dispatch = useDispatch()

    // const mouseOver = (e) => {
    //   if(e.target.className === "ui segment"){
    //     e.target.style = 'display: flex; justify-content: space-between; background-color: #DCDCDC;'
    //   }
    // }
    useEffect(() => {
      dispatch(mapActions.unSetMarker())
    }, [])

    // const mouseLeft = (e) => {
    //   if(e.target.className === "ui segment"){
    //     e.target.style = 'display: flex; justify-content: space-between; background-color: white;'
    //   }
    // }

    return (
        <div style={{display: "flex", margin: 0, padding: 0, height: "85vh"}}>
          <div style={{width: "20vw", overflowY: "scroll"}}>
            <h1>Restaurants</h1>
            {
                restaurants.map(restaurant => 
                <div
                  
                  data-id={restaurant.id}
                  onClick={() => dispatch(mapActions.setMarker(restaurant))} 
                  className="ui segment restaurant" 
                  key={restaurant.id}
                  // onMouseEnter={mouseOver}
                  // onMouseLeave={mouseLeft}
                  style={mapReducer.selectedPlace.id === restaurant.id ? {backgroundColor: "#DCDCDC"} : {}}
                >
                  <div>
                    <b>{restaurant.name}</b>
                  </div>
                  
                  <Link
                    data-tooltip={`View Page`} 
                    data-position="left center"
                   to={`/restaurants/${restaurant.name.split(" ").join("-")}`}
                   
                   >
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