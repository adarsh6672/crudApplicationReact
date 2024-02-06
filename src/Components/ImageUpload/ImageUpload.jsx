import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ImageUpload() {

    const [file ,setFile]=useState()
    const [image , setImage]= useState('/hello')
    const formData = new FormData();
    formData.append('file', file);

    function handleForm(e) {
        e.preventDefault();
        const fileUpload=async()=>{
            try{
                await axios.post("http://localhost:8080/user/uploadimage",formData,{
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res)=>{
                console.log(res)
            })
            }catch(error){
                console.log(error)
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
                    
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => response.arrayBuffer())
            .then((arrayBuffer) => {
              let base64String = btoa(
                new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
              console.log(base64String)
              setImage(`data:image/jpeg;base64,${base64String}`);
            })
            }catch(error){
                console.log(error)
            }
            
        }
        fetch();
      },[])

    

  return (
    <div>
        <div>      
            <img src={image} alt="no image" />
            <form>
            <input type="file" name="image" onChange={handleFileChange} />
            <button type="submit" onClick={(e) => handleForm(e)}>
            Submit
            </button>
        </form>
      </div>
    </div>
  )
}

export default ImageUpload