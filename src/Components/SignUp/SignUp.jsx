import React, { useEffect } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form'

function SignUp() {
    const [firstName , setFirstName] = useState();
    const [lastName , setLastName] = useState();
    const [username , setUsername] = useState();
    const [password , setPassword] = useState();

    const [error1, setError]=useState()
    const [errors, setErrors] = useState({});
    
    const navigate=useNavigate();
    const authenticated=useSelector(state=>state.auth.isLogin)
    useEffect(()=>{
        if(authenticated){
            navigate('/home')
        }
    },[])

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Validate email
        if (!firstName) {
          newErrors.firstName = "*First Name is required";
          isValid = false;
        }
        if (!lastName) {
            newErrors.lastName = "*LastName is required";
            isValid = false;
        }
        if (!username) {
            newErrors.username = "*usernam is required";
            isValid = false;
        }
      
      
    
        // Validate password
        if (!password) {
          newErrors.password = "*Password is required";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    const handleSubmit=async()=>{
        const data={
            firstName,
            lastName,
            username,
            password,
            role:"USER"
        }
        console.log(data)
        if(validateForm()){

        
      try{
        const response = await axios.post("http://localhost:8080/register",data).then((resp)=>{
            console.log(resp)
            navigate('/')
        })
      }catch(error){
        console.log(error)
        if(error.code=='ERR_BAD_REQUEST'){
            setError('Username Already Exist..! Try Another.')
        }
      }
    }
    }
  return (
    <div className='container'>
        <div className="header">
            <div className="text">SIGN UP</div>
            <div className="underline"></div>
            {error1 ? (<div className="err"><p>{error1}</p></div>):(<div></div>)}

        </div>
        <div className="inputs">
            <div className="input">          
                <input type="text"
                placeholder='FIRST NAME'
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)} />
                {errors.firstName && <div className="error">{errors.firstName}</div>}

            </div>
            <div className="input">           
                <input type="text"
                placeholder='LAST NAME'
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)} />
                {errors.lastName && <div className="error">{errors.lastName}</div>}

            </div>
            <div className="input">
                <input type="text"
                placeholder='USER NAME' 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
                {errors.username && <div className="error">{errors.username}</div>}
            </div>
            <div className="input">
                <input type="password" 
                placeholder='PASSWORD'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                {errors.password && <div className="error">{errors.password}</div>}
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