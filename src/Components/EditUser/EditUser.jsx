import React, { useState } from 'react'
import './EditUser.css'
import Header from '../Header/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditUser() {

    const location = useLocation()
    const navigate= useNavigate();
    const userData=location.state;
    const [firstName,setFirstName]=useState(userData.firstName)
    const [lastName , setLastName]= useState(userData.lastName)
    const [username, setUsername] = useState(userData.username)
    const [role , setRole] = useState(userData.role)

    const sendData=()=>{
        const data={
            id:userData.id,
            firstName,
            lastName,
            username,
            role
        }
        console.log(data)
        const send=async()=>{
            try{
            await axios.put("http://localhost:8080/admin/updateuser",data,{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            }).then((response)=>{
                console.log(response,data)
                navigate('/adminpanel')
            })
        }catch(error){
            console.log(error)
        }
        }
        send()
    }
    
  return (
    <div>
            <Header />
        <div className='form-b'> 
       <fieldset> 
         <h2>UPDATE ACCOUNT DETAILS</h2> 
         <div className="Field"> 
           <label> 
             First name  
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             User Name 
           </label> 
           <input 
             value={username} 
             onChange={(e) => { 
               setUsername(e.target.value); 
             }} 
             placeholder="User Name" 
           /> 
         </div> 
         <div className="Field"> 
           
           
           <label> 
             Role  
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
              
             <option value="USER">User</option> 
             <option value="ADMIN">Admin</option> 
           </select> 
         </div > <div className="buttons">
            
         <button  onClick={sendData}> 
           Update account 
         </button> 
         <button onClick={()=>navigate(-1)}>Back</button>
         </div>
       </fieldset> 
     </div>
    </div>
  
  )
}

export default EditUser