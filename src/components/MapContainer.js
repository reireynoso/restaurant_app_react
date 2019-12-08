import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
import mapActions from '../actions/mapActions'

const MapContainer = (props) => {

    const restaurants = useSelector(state => state.restaurantReducer)
    const mapState = useSelector(state => state.mapReducer)
    const dispatch = useDispatch()
  
    const onMarkerClick = (props, marker, e) => {
        const data = {
            props,
            marker,
            e
        }
        dispatch(mapActions.setMarker(data))
    }
    return(
        <Map
            onClick={() => dispatch(mapActions.unSetMarker())}
            google={props.google}
            // Jersey City Starting Point
            zoom={mapState.zoom}
            initialCenter={mapState.center}
            center={mapState.center}  
        >
        {
            restaurants.map(restaurant => <Marker onClick={onMarkerClick} key={restaurant.id} name={restaurant.name} position={{lat: parseFloat(restaurant.latitude), lng: parseFloat(restaurant.longitude)}}/>)
        }
        <InfoWindow
            visible={mapState.showingInfoWindow}
            marker={mapState.activeMarker}
        >
            <div>
                <h1>{mapState.selectedPlace.name}</h1>
            </div>
        </InfoWindow>        

        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API
})(MapContainer)