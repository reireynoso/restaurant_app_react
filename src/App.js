import React, {useEffect} from 'react';
import './App.css';
import MainRestaurantComponent from './components/MainRestaurantComponent'
import NavBar from './components/NavBar'
import {useSelector} from 'react-redux'
import restaurantActions from './actions/restaurantActions'
import {useDispatch} from 'react-redux'

const App = () => {
  const restaurants = useSelector(state => state.restaurantReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurants())
  }, [])
  return (
    <div className="App">
        <NavBar/>

        {/* Rest of body components */}
        <MainRestaurantComponent/>
        
    </div>
  );
}

export default App;
