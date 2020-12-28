import React, { useEffect, useState, useRef, useAuth } from "react";
import logo from "./logo.svg";
import "./App.css";

const flag = useRef(false);

function App() {
   useEffect(() => {
      //
      flag.current = true;
      let ins = true;
   }, []);
   return <div className='App'>Quick Pick App</div>;
}

export default App;
