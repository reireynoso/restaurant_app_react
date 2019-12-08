import React from 'react'

const NavBar = () => {
    return (
        <div className="ui inverted vertical masthead center aligned segment" style={{height: "15vh"}}>
          <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
              <div style={{display: "flex"}}>
                <div className="active item">
                  Home
                </div>
                <div className="item">
                  Restaurants
                </div>
                <div className="item">
                  Favorites
                </div>
              </div>

              <div className="right menu">
                <button className="ui inverted button">Sign Up</button>
                <button className="ui inverted button">Login</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default NavBar