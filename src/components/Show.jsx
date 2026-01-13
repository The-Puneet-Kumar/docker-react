import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';
const Show = () => {
    
const[products,setproducts] = useState([]);


const getproducts = () =>{
  const api = "/products";
  axios
  .get(api)
  .then((products)=>{
    console.log(products);  
setproducts(products.data);
  })
  .catch((err)=> console.log(err));
};

useEffect(()=>{
  getproducts();
},[])
  return (
<>

      <button onClick={getproducts} className='rounded px-5 py-2 bg-red-300'> Call Product Api</button>

<hr/>
<ul>
    {products.length>0 ? products.map(p =>  <li key ={p.id}  className='mb-3  p-5 bg-red-200'>{p.title}</li>):<h1>Loading...</h1> }
      
    </ul>
  
</>
)}

export default Show
