import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../Redux/Slice/AuthSlice';
function Login() {

    const [username , setUsername] = useState();
    const [password , setPassword] = useState();

    

    const dispatch= useDispatch();
    let tester = useSelector(state=>state.auth.isLogin)
    const nav=useNavigate();
    useEffect(()=>{
        if(tester){
            nav('/home')
        }
    },[])
 
    const handleClick=async ()=>{
        const data={
            username,
            password
        }
        console.log(data)

       

        try{
             await axios.post("http://localhost:8080/login",data).then( async (resp)=>{
                let token= resp.data.token
                localStorage.setItem('token' ,token)
                localStorage.setItem('role',resp.data.role)
                dispatch(userLogin())
                nav('/home')
                 
                
            })
          }catch(error){
            alert(error)
            console.log(error)
          }
    }
    
        
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
        <div className="submit" onClick={handleClick}>LogIn</div>
        <Link to='/signup'>
        <div className="login">Go To SignUp</div>
        </Link>
    </div>
</div>
  )
}

export default Login