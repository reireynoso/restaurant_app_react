import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import userActions from '../actions/userActions'
import { file } from '@babel/types';

const UpdateComponent = (props) => {

    const userReducer = useSelector(state => state.userReducer)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let fileInput = React.createRef();

    const dispatch = useDispatch()

    // userActions.updateUser(information, containsImage? , isPassword?)

    const submitInformationChange = async (e) => {
        e.preventDefault()
        // console.log(fileInput.current.value === "")
        if(fileInput.current.value === ""){
            const updateUsername = {username}
            const res = await dispatch(userActions.updateUser(updateUsername, false, false))
            // console.log(res)
            if(!res){
                setUsername("")
                dispatch(userActions.emptyErrors())
            }
        }
        else{
            let formData = new FormData()
            formData.append('username', username.trim().toLowerCase())
            formData.append('photo_url', fileInput.current.files[0])
            const res = await dispatch(userActions.updateUser(formData, true, false))
            // console.log(res)
            if(!res){
                // debugger
                // resets file upload
                // fileInput.current.value = ""
                setUsername("")
                dispatch(userActions.emptyErrors())
            }
        }
        // console.log(username)
    }   

    const submitPasswordChange = (e) => {
        e.preventDefault()
        console.log(password)
        const updatePassword = {password}
        dispatch(userActions.updateUser(updatePassword, false, true))
    }

    useEffect(() => {
        // console.log(props.userReducer.user.username)
        // setUsername(props.userReducer.user.username)
        dispatch(userActions.emptyErrors())
    }, [])

    return (
        <div>
            <h1>Update</h1>
            <ul style={{textAlign: "left"}}>
                {
                    userReducer.updateErrors.map((error, index) => <li key={index} style={{color: "red"}}>{error}</li>)
                }
            </ul>
            <ul style={{textAlign: "left"}}>
                {
                    userReducer.updateSuccess.map((suc, index) => <li key={index} style={{color: "green"}}>{suc}</li>)
                }
            </ul>
            <h3>Change Information</h3>
            <form className="ui form" onSubmit={submitInformationChange}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} name="username" placeholder="Username"/>
                </div>

                <div className="field">
                    <label>Photo Image</label>
                    <input type="file" ref={fileInput}/>
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