import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import userActions from '../actions/userActions'

const NavBar = () => {
  const dispatch = useDispatch()
  const emptyErrors = () => { 
    dispatch(userActions.emptyErrors())
  }
    return (
        <div className="ui inverted vertical masthead center aligned segment" style={{height: "15vh"}}>
          <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
              <div style={{display: "flex"}}>
                <div className="active item">
                  Home
                </div>
                <Link to="/restaurants">
                  <div className="item">
                    Restaurants
                  </div>
                </Link>
                <div className="item">
                  Favorites
                </div>
              </div>

              <div className="right menu">
                <Link to="/signup">
                  <div onClick={emptyErrors} className="ui inverted button">Sign Up</div> 
                </Link>
                <Link to="/login">
                  <div onClick={emptyErrors} className="ui inverted button">Login</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default NavBar