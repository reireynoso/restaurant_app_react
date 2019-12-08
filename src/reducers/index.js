import restaurantReducer from './restaurantReducer'
import userReducer from './userReducer'
import mapReducer from './mapReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    restaurantReducer,
    userReducer,
    mapReducer
})

export default rootReducer