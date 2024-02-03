import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    const [firstName , setFirstName] = useState();
    const [lastName , setLastName] = useState();
    const [username , setUsername] = useState();
    const [password , setPassword] = useState();
    
        
  return (
    <div className='container'>
    <div className="header">
        <div className="text">LOG IN</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        
        <div className="input">
            <input type="texr"
            placeholder='USER NAME' 
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div className="input">
            <input type="password" 
            placeholder='PASSWORD'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        
    </div>
    <div className="submit-container">
        <div className="submit">LogIn</div>
        <Link to='/signup'>
        <div className="login">Go To SignUp</div>
        </Link>
    </div>
</div>
  )
}

export default Login