import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"

const Products = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect (()=>{
      axios({
        url:"  http://localhost:2022/data",
        method:"get"
      }).then(res=>{
        setData(res.data);
  
      }).catch(error=>{
        setLoading(false)
      })
    },[])
    console.log(data)
  return (
    <div>
      <h1>11</h1>
    </div>
  )
}

export default Products
