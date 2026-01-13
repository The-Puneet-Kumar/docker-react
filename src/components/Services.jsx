import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
const Services = () => {

  const[first,setfirst] = useState("this is normal data")
  const[second,setsecond] = useState("this is very large data")

  const getusers = () =>{
    const api = "/users";
    axios
    .get(api)
    .then((users)=>{
      console.log(users);  
      })
    .catch((err)=> console.log(err));
  };
  

    useEffect(()=>{
  getusers();
      console.log("Service component created");
        return()=>{
            console.log("servces deleted");
            
        }
    },[second])
  return (
    <div>
      <h1>{first}</h1>
      <button
      className='rounded bg-red-200 p-2 mb-10' 
       onClick = { () =>setfirst("Normal Data has been Changed")}>
        Change Normal Data
      </button>
      <h1>{second}</h1>
      <button 
       className='rounded bg-red-200 p-2 mb-10'
       onClick = { () =>setsecond("Large Data has been Changed")}>
        Change Large Data
      </button>
    </div>
  )
}

export default Services
