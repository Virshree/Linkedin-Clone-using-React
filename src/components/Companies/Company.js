import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Home from '../Home/Home';
import './Company.css';

function Company() {
    const [companydata,setCompanydata]=useState([]);

    useEffect(()=>{
        fetchCompany();
    },[])
    const fetchCompany=async()=>{
        const url="http://localhost:8001/companies";
        const {data}=await axios.get(url);
        //console.log(data);
        setCompanydata(data);
    }
  return (
     <div  className='company-container'>
        <Home/>
        <div className='details-company'>
            {companydata.map((item,i)=>(
                <div className='style-data' key={i}>
                    <h2>{item.id}</h2>
                    <h3>{item.name}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Company