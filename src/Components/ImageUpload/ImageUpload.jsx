import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ImageUpload.css'
import mypic from '../../Assets/3135715.png'
import { useDispatch, useSelector } from 'react-redux';
import { updatePicture } from '../../Redux/Slice/UserDataSlice';

function ImageUpload() {
    const dispatch=useDispatch()
    const [file ,setFile]=useState()
    const [vis ,setVis]=useState(false)
    const [upload , setUpload]=useState(false)
    const formData = new FormData();
    formData.append('file', file);

    const img=useSelector(state=>state.userData.userImg)

    function handleForm(e) {
        e.preventDefault();
        const fileUpload=async()=>{
            if(file!==null){

            
            try{
                await axios.post("http://localhost:8080/user/uploadimage",formData,{
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res)=>{
                console.log(res)
                setUpload(!upload)
                setVis(false)
            })
            }catch(error){
                console.log(error)
            }
            
        }
    }
    
        fileUpload();
      }
    
      function handleFileChange(e) {
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
      }

      useEffect(()=>{
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
                dispatch(updatePicture(mypic))
                console.log(error)
            }
            
        }
        fetch();
      },[upload])

    

  return (
    <div>
        <div>      
            <img src={img} className='profile-pic' alt='' />
            
            <div>
            
            </div>
            {vis? (<div>
            <form>
            <input className='img-input' type="file" name="image" onChange={handleFileChange} />
            <button className='submit-button' type="submit" onClick={(e) => handleForm(e)}>
            Upload
            </button>
            <div>
                <button onClick={()=>setVis(false)}>Cancel</button>
            </div>
        </form>
        </div>):(
            <div>
                <button onClick={()=>setVis(true)}>Update profile Pic</button>
            </div>
        )}
        
      </div>
    </div>
  )
}

export default ImageUpload