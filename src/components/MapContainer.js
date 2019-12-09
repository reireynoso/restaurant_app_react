import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
import mapActions from '../actions/mapActions'

const MapContainer = (props) => {

    const restaurants = useSelector(state => state.restaurantReducer)
    const mapState = useSelector(state => state.mapReducer)
    const dispatch = useDispatch()

    const style = {
        height: '85vh'
    }
  
    const onMarkerClick = (props, marker, e) => {
        const data = {
            props,
            marker,
            e
        }
        dispatch(mapActions.setMarker(data))
    }

    const centerMoved = (mapProps,map) => {
        console.log(mapProps)
        console.log(map)
    }

    const nightModeStyle = [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    return(
        <div id="mapContainer">
            <Map
                onClick={() => dispatch(mapActions.unSetMarker())}
                google={props.google}
                // Jersey City Starting Point
                // style={style}
                zoom={mapState.zoom}
                initialCenter={mapState.center}
                center={mapState.center} 
                onDragend={centerMoved} 
                mapTypeControl={true}
                zoomControl= {true}
                scaleControl= {true}
                streetViewControl= {false}
                fullscreenControl= {false}
                styles= {nightModeStyle}
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
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API
})(MapContainer)