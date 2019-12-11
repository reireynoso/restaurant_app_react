import React, {useEffect} from 'react';
import './App.css';
import MainRestaurantComponent from './components/MainRestaurantComponent'
import NavBar from './components/NavBar'
import restaurantActions from './actions/restaurantActions'
import userActions from './actions/userActions'
import {useDispatch, useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent'
import RestaurantPageComponent from './components/RestaurantPageComponent'

const App = () => {
  // const restaurants = useSelector(state => state.restaurantReducer)
  const userReducer = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurants())
    dispatch(userActions.fetchAutoLogin())
  }, [])
  return (
    <div className="App">  

        <Route path="*" component={NavBar}/>
        {/* Route path renders on every path */}
        {/* Rest of body components */}
        <Switch>
          {/* <Route path="/signup" component={LoginComponent}/> */}
          {/* <Route path="/login" component={LoginComponent}/> */}
          <Route path="/signup" render={(routerProps) => userReducer.loggedIn ? <Redirect to="/restaurants"/> : <LoginComponent {...routerProps}/>}/>
          <Route path="/login" render={(routerProps) => userReducer.loggedIn ? <Redirect to="/restaurants"/> : <LoginComponent {...routerProps}/>}/>
          {/* <Route path="/login" render={(routerProps) => userReducer.loggedIn ? <Redirect to="/restaurants"/> : <LoginComponent {...routerProps}/>}/> */}
          <Route path="/restaurants/:name" component={RestaurantPageComponent}/>
          <Route path="/restaurants" component={MainRestaurantComponent}/>
          <Route path="/home" component={HomeComponent}/>
          <Route path="/" render={() => <Redirect to= "/home" />}/> 
        </Switch>
    </div>
  );
}

export default App;
