import React from 'react'
import Header from '../Header/Header'
import { UseDispatch , useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../Redux/Slice/UserDataSlice'
import './Home.css'
import axios from 'axios'
import { useEffect } from 'react'

function Home() {
    

  
  return (
    <>
        <Header />
        <div className='home'>
        <h2 >Welcome to Home page</h2>
        <p>hello </p>
        </div>

    </>
  )
}

export default Home