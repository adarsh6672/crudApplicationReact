import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [firstName , setFirstName] = useState();
    const [lastName , setLastName] = useState();
    const [username , setUsername] = useState();
    const [password , setPassword] = useState();
    
    const navigate=useNavigate();


    const handleSubmit=async()=>{
        const data={
            firstName,
            lastName,
            username,
            password,
            role:"USER"
        }
        console.log(data)
      try{
        const response = await axios.post("http://localhost:8080/register",data).then((resp)=>{
            console.log(resp)
            navigate('/')
        })
      }catch(error){
        console.log(error)
      }
    }
  return (
    <div className='container'>
        <div className="header">
            <div className="text">SIGN UP</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">          
                <input type="text"
                placeholder='FIRST NAME'
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)} />
            </div>
            <div className="input">           
                <input type="text"
                placeholder='LAST NAME'
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)} />
            </div>
            <div className="input">
                <input type="text"
                placeholder='USER NAME' 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="input">
                <input type="password" 
                placeholder='PASSWORD'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            
        </div>
        <div className="submit-container">
            <div className="submit" onClick={handleSubmit}>Sign Up</div>
            <Link to='/'>
            <div className="login">Go To Login </div>
            </Link>
        </div>
    </div>
  )
}

export default SignUp