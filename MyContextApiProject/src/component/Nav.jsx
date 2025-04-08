import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../Contest/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinctCat =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCat = [ ...new Set(distinctCat)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed(0)},
                 ${(Math.random() * 255).toFixed(0)},
                 ${(Math.random() * 255).toFixed(0)},
                 0.4)`;
  };

  return (
    <>
      <nav className="w-[15%] bg-slate-300 font-[gilroy] pt-16 flex flex-col items-center">
        <NavLink className="text-lg font-semibold border-1 border-blue-300 px-3 py-1 rounded text-blue-500 shadow-lg">
          Add new Product
        </NavLink>
        <h1 className="text-sm font-semibold py-6 w-[80%]">Category Filter</h1>
        <div className="w-[80%] ">
          {distinctCat.map((c, i) => (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="text-sm font-semibold px-3 py-1 mb-2 flex items-center gap-4"
            >
              <span
                className={`h-4 w-4 rounded-full bg-[${color()}] inline-block`}
              ></span>
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
