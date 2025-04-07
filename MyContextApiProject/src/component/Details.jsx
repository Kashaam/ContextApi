import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import axios from '../Contest/axios'

const Details = () => {

    const [product, setProduct] = useState(null);
   const {id} = useParams();
    const getsingleprosuct = async () =>{
        try {
            const {data} = await axios.get(`/products/${id}`);
            setProduct(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getsingleprosuct()
    }, []);


  return product ? (
    <div className='w-[70%] h-screen m-auto flex justify-between p-20 items-center'>
        <div className='w-[40%] '>
            <img className=' w-full object-contain' src={product.image} alt="" />
        </div>
        <div className='w-[55%] px-3 py-1 mt-4'>
            <h1 className='text-5xl font-semibold '>{product.title}</h1>
            <h3 className='text-sm font-semibold my-5 text-zinc-300'>{product.category}</h3>
            <h2 className='text-sm font-semibold text-blue-300'>$ {product.price}</h2>
            <p className='text-xs font-semibold mt-3 mb-[5%]'>{product.description}</p>
            <Link className="text-lg font-semibold border-1 border-blue-300 px-3 py-1 rounded text-blue-300 shadow-lg mr-5">Edit</Link>
            <Link className="text-lg font-semibold border-1 border-red-300 px-3 py-1 rounded text-red-300 shadow-lg">Delete</Link>
        </div>
     
    </div>
    
  )
  : <h1 className="text-5xl flex justify-center items-center">Loading</h1>
}

export default Details
