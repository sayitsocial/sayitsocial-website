import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
