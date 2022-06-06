import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Home from '../Home/Home';
import './User.css';
function User() {

    const[userdata,setUserdata]=useState([]);

    useEffect(()=>{
        fetchUsers();
    },[])
    const fetchUsers=async()=>{
        const url="http://localhost:8002/users";
        const {data}=await axios.get(url);
        //console.log(data);
        setUserdata(data);
    }
  return (
    <div className='user-container'>
        <Home/>
        <div className='user-details'>
            {userdata.map((item,i)=>(
                <div className='user-styles' key={i}>
                    <h2>{item.id}</h2>
                    <h3>{item.name}</h3>
                    <h4>{item.email}</h4>
                </div>
            ))}
        </div>
    </div>
  )
}

export default User;