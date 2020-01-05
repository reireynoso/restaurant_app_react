import React from 'react'


const HomeComponent = () => {
   
    return (
        <div className="space-div animated fadeInRight">
          <div style={{width: "100%", border: "solid black 5px", margin: "6%", borderRadius: "20px"}}>
            <h1 style={{textAlign: "center", padding: "2% 0", margin: 0, height: "20%"}}>Welp (Restaurant App around Jersey City)</h1>

            <div style={{width: "100%", height: "80%"}}>
              <p style={{textAlign: "center", marginBottom: 0}}>The App that tries to clone Yelp but not really...</p>
              <div style={{display: "flex", justifyContent: "center", paddingTop: "1.5%"}}>
                <div style={{padding: "2%", width: "50%"}}>
                  <h4>The following features of this app include:</h4>
                  <ul>
                    <li>Viewing restaurants based on Location</li>
                    <li>Reviewing restaurants</li>
                    <li>Rating dishes</li>
                    <li>User authentication/authorization</li>
                    <li>Image upload for user</li>
                    <li>User updating information including password</li>
                    <li>Pure functional components</li>
                  </ul>
                </div>

                <div style={{padding: "2%", width: "50%"}}>
                  <h4>The following technologies of this app include:</h4>
                  <ul>
                    <li>Rails (Server-Side)</li>
                    <li>React (Client-Side)</li>
                    <li>Semantic UI / Semantic UI React</li>
                    <li>React Hooks (useDispatch, useSelector, useEffect, useState)</li>
                    <li>Animate CSS</li>
                    <li>BCrypt</li>
                    <li>Cloudinary</li>
                    <li>Google Maps React</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default HomeComponent