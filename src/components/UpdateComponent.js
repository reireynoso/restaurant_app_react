import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import userActions from '../actions/userActions'

const UpdateComponent = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let fileInput = React.createRef();

    const dispatch = useDispatch()

    const submitInformationChange = (e) => {
        e.preventDefault()
        console.log(fileInput.current === null)
        console.log(username)
    }   

    const submitPasswordChange = (e) => {
        e.preventDefault()
        console.log(password)
        const updatePassword = {password}
        dispatch(userActions.updateUser(updatePassword, false, true))
    }

    useEffect(() => {
        // console.log(props.userReducer.user.username)
        setUsername(props.userReducer.user.username)
    }, [])

    return (
        <div>
            <h1>Update</h1>
            <h3>Change Information</h3>
            <form className="ui form" onSubmit={submitInformationChange}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} name="username" placeholder="Username"/>
                </div>

                <div className="field">
                    <label>Photo Image</label>
                    <input type="file"/>
                </div>

                <button className="ui button" type="submit">Update Information</button>
            </form>
            
            <h3>Change Password</h3>
            <form className="ui form" onSubmit={submitPasswordChange}>
                <div className="field">
                    <label>Change Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password"/>
                </div>

                <button className="ui button" type="submit">Update Password</button>
            </form>
        </div>
    )
}

export default UpdateComponent