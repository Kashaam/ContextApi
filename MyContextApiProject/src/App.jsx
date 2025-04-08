import React from "react";
import Nav from "./component/Nav";
import Home from "./component/Home";
import {Routes, Route, Link} from "react-router-dom"
import Details from "./component/Details";

const App = () => {
  return <div className="h-screen w-full  flex ">
    <Link to="/" className="text-sm font-semibold text-red-300 absolute left-[18%] p-2">Home</Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </div>;
};

export default App;
