import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"

const Products = () => {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true)
        axios({
            url:"  http://localhost:3000/data",
            method:"get"
        }).then(res=>{
            setData(res.data);

        }).catch(err=>{
            setLoading(false)
        })
    },[])
    console.log(data)
   
  return (
    <div>
      <h1>Products</h1>
      <div className='grid'>

      {
          data.map((ele)=>{
              return(
                  <div key={ele.id}>
                      <h4>{ele.category}</h4>
                      {/* <p>{ele.description}</p> */}
                      <img style={{width:"200px",height:"200px"}} src={ele.image} alt="product" /> 
                      <h3>{ele.price}</h3>
                      <p>{ele.title}</p>
                  </div>
              )
          })
      }
      </div>
    </div>
  )
}

export default Products
