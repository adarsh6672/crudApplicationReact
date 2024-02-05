import React, { useState } from 'react'
import Header from '../Header/Header';
import './AddUser.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
        const [firstName , setFirstName] =useState('')
        const [lastName , setLastName] =useState('')
        const [username , setUsername ]= useState('')
        const [password , setPassword] =useState('');
        const [role ,setRole] = useState('USER')
        const navigate=useNavigate();


        const handleSubmit =async ()=>{
            const data={
                firstName,
                lastName,
                username,
                password,
                role
            }

            console.log(data)
            console.log("hello")
            try{
                const response = await axios.post("http://localhost:8080/admin/adduser",data,{
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                     }
                }).then((resp)=>{
                    console.log(resp)
                    navigate('/adminpanel')
                })
              }catch(error){
                console.log(error)
              }

        }
  return (
    <div>
            <Header />
        <div className='form-b'> 
       <fieldset> 
         <h2>CREATE ACCOUNT</h2> 
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
             Password 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword(e.target.value); 
             }}  
           /> 
           
           <label> 
             Role  
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
              
             <option value="USER">User</option> 
             <option value="ADMIN">Admin</option> 
           </select> 
         </div > <div className="buttons">
            
         <button  onClick={handleSubmit}> 
           Create account 
         </button> 
         <button onClick={()=>navigate(-1)}>Back</button>
         </div>
       </fieldset> 
     </div>
    </div>
  )
}

export default AddUser