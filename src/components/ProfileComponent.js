import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const ProfileComponent = () => {
    const user = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    console.log(user)
    return (
        <div className="space-div" style={{margin: "0 10%", textAlign: "center", backgroundColor: "#F3F1F0"}}>
            <div style={{width: "30vw"}}>
                <div style={{borderRadius: "15px", overflow: "hidden"}}>
                    <img style={{height: "250px", width: "100%"}} src="https://lastfm.freetls.fastly.net/i/u/770x0/8837abdce7634e93999e4d3738fd0ed1.jpg"/>
                </div>

                <div>
                    <h1>Username Profile</h1>
                </div>

                <div style={{margin: "auto"}}>
                    <div className="ui segment profile-menu">
                        Reviewed Restaurants
                    </div>
                    <div className="ui segment profile-menu">
                        Rated Dishes
                    </div>

                    <div class="ui segment profile-menu">
                        Update Profile
                    </div>
                </div>
            </div>

            <div style={{width: "70vw", padding: "2.5%"}}>

            </div>
        </div>
    )
}

export default ProfileComponent