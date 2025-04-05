import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
   <>
   <nav className="w-[15%] bg-slate-300 font-[gilroy] pt-16 flex flex-col items-center">
        <NavLink className="text-lg font-semibold border-1 border-blue-300 px-3 py-1 rounded text-blue-500 shadow-lg">
          Add new Product
        </NavLink>
        <h1 className="text-sm font-semibold py-6 w-[80%]">Category Filter</h1>
        <ul className="w-[80%] ">
          <li className="text-sm font-semibold px-3 py-1 mb-2 flex items-center gap-4">
            <span className="h-4 w-4 rounded-full bg-blue-300 inline-block"></span>
            cat1
          </li>
        </ul>
      </nav>
   </>
  )
}

export default Nav
