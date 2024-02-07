import React, { useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import Header from '../Header/Header'
import ImageUpload from '../ImageUpload/ImageUpload';
import { UseSelector, useSelector } from 'react-redux';

function Profile() {

    // const [user , setUser] = useState();
    const user=useSelector(state => state.userData.userData)
    

       
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
                    <ImageUpload />
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Profile