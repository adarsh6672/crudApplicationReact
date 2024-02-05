import React, { useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import Header from '../Header/Header'

function Profile() {

    const [user , setUser] = useState();

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
                setUser(response.data)
            })         
            
        })()
        
    },[])
  return (
    <div>
        <Header />

        <div className='home'>
        <h2 >Welcome to Profile page</h2>
            <div className="details">

                <div className='userDetails'>
                    
                        <h2>User Details</h2>
                    {user?(
                        <div className='user-info'>
                        <div className="left-info">
                                <p>First Name</p>
                                <p>Last Name</p>
                                <p>User Name</p>
                                <p>Role</p>
                            </div>
                            <div className="right-info">
                                <p>{user.firstName}</p>
                                <p>{user.lastName}</p>
                                <p>{user.username}</p>
                                <p>{user.role}</p>
                            </div>
                        </div>
                    ):(
                        <div className='user-info'>
                            

                        </div>
                    )}
                   
                    
                </div>
                <div className="userimage">
                    
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Profile