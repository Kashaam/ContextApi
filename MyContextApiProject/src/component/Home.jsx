import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Contest/Context";
import Nav from "./Nav";
import axios from "../Contest/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
 const {search} = useLocation();
 const category = decodeURIComponent(search.split('=')[1]);
 
 const [filterProducts, setFilterProducts] = useState(null);
 const getFilterProduct = async ()=>{
  try {
    const {data } = await axios.get(`/products/category/${category}`)
    setFilterProducts(data);
  } catch (error) {
    console.log(error);
  }
  

 }



 useEffect(()=>{
  if(!filterProducts || category == "undefined") setFilterProducts(products);
  if(category != "undefined") getFilterProduct();
 }, [category, products])


  return products ? (
    <>
      <Nav />
      <div className=" w-[85%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filterProducts &&  filterProducts.map((pro, ind) => {
          return (
            <Link
              key={ind}
              to={`/details/${pro.id}`}
              className="rounded-md overflow-hidden w-54 border shadow-lg flex flex-col items-center justify-center mr-3 mb-3"
            >
              <div className="h-46 w-40 mt-4 hover:scale-[1.1] transition-transform duration-300 ease-in-out">
                <img
                  className="h-full w-full object-contain"
                  src={`${pro.image}`}
                  alt=""
                />
              </div>
              <h1 className="text-sm leading-4 px-1 font-semibold py-2 mt-1 text-center">
                {pro.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <h1 className="text-5xl flex justify-center items-center">Loading</h1>
  );
};

export default Home;




// const { search } = useLocation();
// const category = decodeURIComponent(search.split("=")[1]);
// console.log(category);

// const [filterProducts, setFilterProducts] = useState(null);
// const getProductsCategory = async () => {
//   try {
//     const { data } = await axios.get(`./products/category/${category}`);
//     setFilterProducts(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   if(!filterProducts || category == "undefined") setFilterProducts(products)
//   if (category != "undefined") getProductsCategory();
// }, [category, products]);