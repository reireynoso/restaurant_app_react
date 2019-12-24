import React from 'react'

const ProfileComponent = () => {
    return (
        <div className="space-div" style={{margin: "0 10%", textAlign: "center", backgroundColor: "#F3F1F0"}}>
            <div style={{width: "20vw"}}>
                <div style={{borderRadius: "15px", overflow: "hidden"}}>
                    <img style={{height: "250px", width: "100%"}} src="https://lastfm.freetls.fastly.net/i/u/770x0/8837abdce7634e93999e4d3738fd0ed1.jpg"/>
                </div>

                <div>
                    <h1>Username Profile</h1>
                </div>

                <div class="ui vertical menu" style={{margin: "auto"}}>
                    <a href="https://www.google.com" class="item">
                        Visit Google
                    </a>
                    <div class="link item">
                        Javascript Link
                    </div>
                </div>
            </div>

            <div style={{width: "80vw", padding: "2.5%"}}>

            </div>
        </div>
    )
}

export default ProfileComponent