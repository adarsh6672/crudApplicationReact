import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import './AdminPanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash , faEdit, faSearch ,faAdd} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function AdminPanel() {
    const [users , setUsers]=useState();
    const [modify , setModify] = useState(false)
    const navigate= useNavigate()
    const [searchkey , setSearchKey]= useState('');
    const [result , setResult]= useState()

    useEffect(()=>{
        const fethData= ()=>{
            axios.get("http://localhost:8080/admin/fetchusers",{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
             }
        }).then((responce)=>{
            console.log(responce.data)
            setUsers(responce.data)
            setResult(responce.data)
        })
        }
    fethData();
    },[modify])

   const handleDelete =async(id)=>{
    if (window.confirm('Are you sure you want to delete this item?')){

        try{
            await axios.delete(`http://localhost:8080/admin/deleteuser/${id}`,{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then((response)=>{
                console.log(response)
                setModify(!modify)
                
            })
            
        }catch(error){
            console.log(error)
        }
    }
   }

   const editItem=(item)=>{
        navigate('/edituser',{state: item})
   }


   const handleSearch=()=>{
    const filteredUser=users.filter(user =>
        user.firstName.toLowerCase().includes(searchkey.toLowerCase())
      );
        setResult(filteredUser)
   }


  return (
    <div>
        <Header />
        <h2 className='heading'>Admin Panel</h2>

        
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search"
                onChange={(e)=>setSearchKey(e.target.value)}/>
                <div  className="searchButton" onClick={handleSearch}>
                    
                    <FontAwesomeIcon icon={faSearch} 
                    /> Search
                </div>
            </div>
            <Link to='adduser'>
            <div className="add-icon">
                    <FontAwesomeIcon icon={faAdd} />
            Add user
            </div>
            </Link>
        </div>
        <div className='user-table'>
            <table>
                <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>UserName</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {result && result.filter((user)=>user.role!=='ADMIN').map((item, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td> 
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.username}</td>
                            <td>{item.role}</td>
                            <td>
                            <FontAwesomeIcon   
                             className='icon' icon={faEdit}
                             onClick={()=>{editItem(item)}} />
                            <FontAwesomeIcon className='icon'
                                onClick={()=>{handleDelete(item.id)}}
                             icon={faTrash} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AdminPanel