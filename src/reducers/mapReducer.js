const initialState = {
    showingInfoWindow: false,
    // activeMarker: {},
    selectedPlace: {},
    center: { lat: 40.726615, lng: -73.995448},
    zoom: 13,
    hoveredRestaurant: false
}
const mapReducer = (state=initialState, {type,payload}) => {
    switch(type){
        case "ON_MARKER_CLICK": 
        // const {props, marker} = payload
        // debugger
        return {
            ...state,
            center: { lat: payload.latitude, lng: payload.longitude},
            selectedPlace: payload,
            // activeMarker: marker,
            showingInfoWindow: true,
            zoom: 13,
        }
        case "SET_CENTER":
            return {
                ...state,
                center: payload,
                zoom: 17
            }
        case "ON_MAP_CLICK":
            return {
                ...state,
                center: { lat: 40.726615, lng: -73.995448},
                zoom: 13,
                selectedPlace: {},
                showingInfoWindow: false
            }
        default: return state
    }
}

export default mapReducer