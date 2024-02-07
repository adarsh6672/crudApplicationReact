import React from 'react'
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { UseSelector , useDispatch, useSelector } from 'react-redux'
import AuthSlice, { userLogout } from '../../Redux/Slice/AuthSlice'
import { setUserData } from '../../Redux/Slice/UserDataSlice'
import { useEffect } from 'react'
import axios from 'axios'
import { updatePicture } from '../../Redux/Slice/UserDataSlice'
import myPic from '../../Assets/3135715.png'



function Header() {
    const dispatch=useDispatch();
    let status= useSelector(state => state.auth.isLogin)
    let image = useSelector(state => state.userData.userImg)
    let user = useSelector(state => state.userData.userData)
    console.log(user,'si user')
    const navigate = useNavigate()
    const handleLogout=()=>{
        localStorage.clear()
        dispatch(userLogout())
        console.log(status , 'is the status of login')
        navigate('/')
        console.log(localStorage.getItem('token'),'is the token')
    }


    useEffect(()=>{

        (()=>{
            
                 axios.get("http://localhost:8080/profile",{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                 }
            }).then((response)=>{
                console.log(response)
                console.log(response.data.username)
                console.log('user logged in')
                dispatch(setUserData(response.data))
            })         
            
        })()

        const fetch= async()=>{
            try{
                await axios.get("http://localhost:8080/profile/getimage",{
                responseType : 'arraybuffer',
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
              console.log(response)
              const url = URL.createObjectURL(new Blob([response.data]));
              dispatch(updatePicture(url))
            })
            }catch(error){
                dispatch(updatePicture(myPic))
                console.log(error)
            }
            
        }
        fetch();
        
    },[])
  return (
    
    <>
        <div className='header1'>
            <div className='main-header'>
                <div className="header-left">
                    <h1>AUTHENTICATION AND AUTHERIZATION USING REACT</h1>
                </div>
                <div className="header-right">
                    
                    {user? (
                        <p className='header-name'>{user.firstName}</p>
                    ):(
                        <div></div>
                    )}

                    <img className='header-pic' src={image} alt={myPic} />
                    
                </div>
        
        </div>
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