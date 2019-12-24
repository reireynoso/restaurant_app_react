import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import userActions from '../actions/userActions'
// import mapActions from '../actions/mapActions';

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer)
  // console.log(user)

  // const [active, setActive] = useState("")

  const emptyErrors = () => { 
    dispatch(userActions.emptyErrors())
  }

  const logOut = () => {
    dispatch(userActions.logOutUser())
  }

  const setActive = (path) => {
    const urlPath = window.location.pathname
    switch(urlPath){
      case path:
        return "active"
      default: return ""
    }
  }

  return (
      <div className="ui inverted vertical masthead center aligned segment" style={{height: "15vh"}}>
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <div style={{display: "flex"}}>
              <Link to="/home">
              <div className={`item ${setActive('/home')}`}>
                Home
              </div>
              </Link>
              <Link to="/restaurants">
                <div className={`item ${setActive('/restaurants')}`}>
                  Restaurants
                </div>
              </Link>
              <Link to="/profile">
                <div className={`item ${setActive('/profile')}`}>
                  Profile
                </div>
              </Link>
            </div>

            <div className="right menu">
              {
                user.loggedIn ? 
                <>
                <div className="ui secondary button disabled">
                  Welcome, {user.user.username}
                </div>
                <Link to="/restaurants">
                  <div onClick={logOut} className={"ui inverted button"}>Logout</div> 
                </Link>
                </>
                :
                <>
                  <Link to="/signup">
                    <div onClick={emptyErrors} className={`ui inverted button ${setActive('/signup')}`}>Sign Up</div> 
                  </Link>
                  <Link to="/login">
                    <div onClick={emptyErrors} className={`ui inverted button ${setActive('/login')}`}>Login</div>
                  </Link>
                </>
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default NavBar