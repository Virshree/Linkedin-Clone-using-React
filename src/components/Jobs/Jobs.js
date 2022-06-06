import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import '../Jobs/job.css';

function Jobs() {
    const [jobsdata,setJobs]=useState([]);
    useEffect(()=>{
        fetchJobs();
    })
    const fetchJobs=async()=>{
        const url="http://localhost:8000/jobs";
        const data= await axios.get(url);
        //console.log(data);
        setJobs(data.data);
    }
  return (
    <div className='users-main'>
        <Home  />

        <div className='users-details'>
          
            {jobsdata.map((item,i)=>(
                <div className='users' key={i}>
                    <h4>{item.title}</h4>
                     <p>{item.description}</p>
                </div>
            ))}
                    
        </div>
       
    </div>
  )
}

export default Jobs;