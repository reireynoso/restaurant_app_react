const initialState = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    center: { lat: 40.726615, lng: -73.995448},
    zoom: 13
}
const mapReducer = (state=initialState, {type,payload}) => {
    switch(type){
        case "ON_MARKER_CLICK": 
        const {props, marker} = payload
        return {
            ...state,
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        }
        case "SET_CENTER":
            return {
                ...state,
                center: payload,
                zoom: 17
            }
        case "ON_MAP_CLICK":
        return initialState
        default: return state
    }
}

export default mapReducer