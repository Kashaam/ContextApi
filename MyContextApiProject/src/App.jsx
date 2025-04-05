import React from "react";
import Nav from "./component/Nav";
import Home from "./component/Home";
import {Routes, Route} from "react-router-dom"
import Details from "./component/Details";

const App = () => {
  return <div className="h-screen w-full  flex ">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </div>;
};

export default App;
