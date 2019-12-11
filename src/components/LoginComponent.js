import React, {useState} from 'react'
import userActions from '../actions/userActions'
import {useDispatch, useSelector} from 'react-redux'

const LoginComponent = (props) => {
    // console.log(props.history.location.pathname.split("").splice(1).join(""))

    const user = useSelector(state => state.userReducer)
    // console.log(user)

    const dispatch = useDispatch()
    const route = props.history.location.pathname.split("").splice(1).join("")
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [errors, setErrors] = useState([])
    
    const checkRoute = () => {
        return route === 'login' ? "Login" : "Sign Up"
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)   
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)   
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await dispatch(userActions.fetchUser({username: username.trim().toLowerCase(), password}, route)) 
        if(!res){
            setUsername("")
            setPassword("")
            // setErrors(res)
            dispatch(userActions.emptyErrors())
        }
    }

    const loginDivStyle = {
        margin: "10%", 
        padding:"2%", 
        border: "2px solid black", 
        borderRadius: "10px", 
    }

    const errorLiStyle = {
        color: 'red'
    }
    return(
        <div style={loginDivStyle}>
            <h2 style={{textAlign: "center"}}>{checkRoute()}</h2>
            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <label>Username</label>
                    <input type="text" onChange={handleUsernameChange} autoComplete="off" name="username" value={username} placeholder="Username"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" onChange={handlePasswordChange} value={password} name="password" placeholder="Password"/>
                </div>
                <ul>
                {
                    user.loginErrors.map((error,idx) => <li style={errorLiStyle} key={idx}>{error}</li>)
                }
                </ul>
                <button className="ui button" type="submit">{checkRoute()}</button>
            </form>
        </div>
    )
}

export default LoginComponent