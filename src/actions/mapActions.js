const setMarker = (data) => ({
    type: "ON_MARKER_CLICK", payload: data
})

const unSetMarker = () => ({
    type: "ON_MAP_CLICK"
})

const setCenter = (newLocation) => ({
    type: "SET_CENTER",
    payload: newLocation
})

export default {
    setMarker,
    unSetMarker,
    setCenter
}