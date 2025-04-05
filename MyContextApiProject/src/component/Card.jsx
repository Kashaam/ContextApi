import React from 'react'
import{Link} from "react-router-dom"

const Card = () => {
  return (
    <Link to="/details/1" className='rounded-md overflow-hidden w-46 border shadow-lg flex flex-col items-center justify-center mr-3 mb-3'>
      <div className='h-46 w-40 mt-4 hover:scale-[1.1] transition-transform duration-300 ease-in-out'>
        <img className='h-full w-full object-contain' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
      </div>
      <h1 className='text-sm leading-4 px-1 font-semibold py-2 mt-1 text-center'>Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus veritatis debitis.</h1>
    </Link>
  )
}

export default Card
