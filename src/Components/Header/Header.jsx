import React from 'react'
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { UseSelector , useDispatch, useSelector } from 'react-redux'
import AuthSlice, { userLogout } from '../../Redux/Slice/AuthSlice'



function Header() {
    const dispatch=useDispatch();
    let status= useSelector(state => state.auth.isLogin)
    const navigate = useNavigate()
    const handleLogout=()=>{
        localStorage.clear()
        dispatch(userLogout())
        console.log(status , 'is the status of login')
        navigate('/')
        console.log(localStorage.getItem('token'),'is the token')
    }
  return (
    
    <>
        <div className='header1'>
        <h1>AUTHENTICATION AND AUTHERIZATION USING REACT</h1>
            <div className="headerChildDiv">
                <div className='left'>
                <NavLink to="/home"  >Home</NavLink>
                <NavLink to="/profile" >Profile</NavLink>
                {localStorage.getItem('role')==="ADMIN" ?(
                    <NavLink to='/adminpanel' >Admin Panel</NavLink>
                ):(
                    <div></div>
                )}

                </div>
                <div className='right'>
                    <p onClick={handleLogout}>Log Out</p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Header