import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import userActions from '../actions/userActions'
import {Rating} from 'semantic-ui-react'
import UpdateComponent from './UpdateComponent'

const ProfileComponent = () => {
    const user = useSelector(state => state.userReducer)
    const [currentView, setCurrentView] = useState("")
    const dispatch = useDispatch()
    
    console.log(user)
    
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // let fileInput = React.createRef();

    useEffect(() => {
        dispatch(userActions.fetchReviewAndRatedDish())
        // setUsername("")
        // setPassword("")
    }, [])


    // const submitInformationChange = (e) => {
    //     e.preventDefault()
    //     console.log(fileInput.current === null)
    // }   

    const generateDollarSigns = (price) => {
        const whackSolution = []
        for(let i = 0; i < price; i++){
            whackSolution.push("something")
        }
        return <div>Price Rating: 
                {
                    whackSolution.map((whack, index) =>  <i key={index} className="dollar sign icon"></i>)
                }
        </div>
    }

    const generateUserProfileImage = () => <div style={{width: "20vw"}}>
        <div className="profile-image-container">
            <img alt="" style={{height: "80px", width: "100%"}} src={user.user.photo_url}/>
        </div>
    </div>

    const checkWhichToRender = () => {
        switch(currentView){
            case "reviews": 
                const reviews = user.reviewedRestaurants
                return <div>
                    <h1>Reviewed Restaurants</h1>
                    {
                        reviews.length !== 0 ?
                        reviews.map(review => 
                        <div key={review.id} className="ui segment restaurant-info">
                           <div style={{display: "flex"}}>
                                {
                                    generateUserProfileImage()
                                }

                                <div style={{padding: "0 4%", width: "80vw"}}>
                                    <p style={{width: "300px", overflowWrap: "break-word"}}>{review.comment}</p>
                                    <hr/>
                                    <div>
                                        <div style={{display: "flex"}}>
                                            <div>
                                                <img alt={review.restaurant.name} style={{height: "50px", width: "50px"}} src={review.restaurant.logo}/>
                                            </div>
                                            <div>
                                                <h4>{review.restaurant.name}</h4>
                                                {
                                                    generateDollarSigns(review.restaurant.price_rating)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                        )
                        :
                        <h3>No Restaurants Reviewed...yet</h3>
                    }
                </div>
            case "ratings":
                const ratedDishes = user.ratedDishes
                return <div>
                    <h1>Rated Dishes</h1>
                    {
                        ratedDishes.length !== 0 ?
                        ratedDishes.map(rate => 
                        <div key={rate.id} className="ui segment">
                            <div style={{display: "flex"}}>
                                {
                                    generateUserProfileImage()
                                }
                                <div style={{padding: "0 4%", width: "80vw", display: "flex"}}>
                                    <div style={{width: "50%", padding:"0 2%"}}>
                                        
                                        <h3 style={{margin: 0}}>{rate.dish.name}</h3>
                                        <Rating icon='star' disabled defaultRating={rate.rating} maxRating={5} />
                                        <div>Price: <b>${(rate.dish.price * 0.01).toFixed(2)}</b></div>
                                    </div>

                                    <div style={{width: "50%", padding:"0 2%"}}>
                                        <div >
                                            <div>
                                                <img alt={rate.dish.restaurant.name} style={{height: "50px", width: "50px"}} src={rate.dish.restaurant.logo}/>
                                            </div>
                                            <div>
                                                <h4>{rate.dish.restaurant.name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                        :
                        <h3>No Dishes Rated...yet</h3>
                    }
                </div>
            case "update":
                return <UpdateComponent />
            default: return <div>
                <h1>Welcome to your Profile Page</h1>
                <p>Please select one of the tabs to begin.</p>
            </div>
        }
    }
    return (
        <div className="space-div" style={{margin: "0 10%", textAlign: "center", backgroundColor: "#F3F1F0"}}>
            {
                user.loggedIn ? 
                <>
                <div style={{width: "30vw"}}>
                    <div className="profile-image-container">
                        <img alt="" style={{height: "250px", width: "100%"}} src={user.user.photo_url}/>
                    </div>

                    <div>
                        <h1>{user.user.username}'s Profile</h1>
                    </div>

                    <div style={{margin: "auto"}}>
                        <div style={currentView === "reviews" ? {backgroundColor: "#DCDCDC"} : {}} onClick={() => setCurrentView("reviews")} className="ui segment profile-menu">
                            Reviewed Restaurants
                        </div>
                        <div style={currentView === "ratings" ? {backgroundColor: "#DCDCDC"} : {}} onClick={() => setCurrentView("ratings")} className="ui segment profile-menu">
                            Rated Dishes
                        </div>

                        <div style={currentView === "update" ? {backgroundColor: "#DCDCDC"} : {}} onClick={() => setCurrentView("update")} className="ui segment profile-menu">
                            Update Profile
                        </div>
                    </div>
                </div>

                <div style={{width: "70vw", padding: "2.5%", overflowY: "scroll"}}>
                    {
                        checkWhichToRender()
                    }
                </div>
                </>
            :
            <h1>Not sure how you accessed this route but log in first.</h1>
            // null
            }    
        </div>
    )
}

export default ProfileComponent