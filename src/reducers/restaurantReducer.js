const restaurantReducer = (state = [], {type, payload}) => {
    switch(type){
        case "SET_RESTAURANTS":
            return payload
        default: return state
    }
}

export default restaurantReducer