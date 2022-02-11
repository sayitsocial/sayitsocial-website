import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
