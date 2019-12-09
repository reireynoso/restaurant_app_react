import React, {useEffect} from 'react';
import './App.css';
import MainRestaurantComponent from './components/MainRestaurantComponent'
import NavBar from './components/NavBar'
import {useSelector} from 'react-redux'
import restaurantActions from './actions/restaurantActions'
import {useDispatch} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent'
import RestaurantPageComponent from './components/RestaurantPageComponent'

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
        <Switch>
          <Route path="/signup" component={LoginComponent}/>
          <Route path="/login" component={LoginComponent}/>
          <Route path="/restaurants/:name" component={RestaurantPageComponent}/>
          <Route path="/restaurants" component={MainRestaurantComponent}/>
          <Route path="/" component={HomeComponent}/>
        </Switch>
    </div>
  );
}

export default App;
