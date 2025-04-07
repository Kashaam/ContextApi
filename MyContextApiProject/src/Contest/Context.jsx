import React, { createContext, useEffect, useState } from 'react'
import axios from './axios';

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(null);

  const getProsucts = async()=>{
    try {
        const {data} = await axios("/products");
        setProducts(data);
    } catch (error) {
        console.log(error)
        
    }
  }

  useEffect(()=>{
    getProsucts();
  }, [])


  return (
    <ProductContext.Provider value={ [products, setProducts] }>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context
