import logo from './logo.svg';
import './App.css';
import Tab from "./Components/Tab.jsx"

import React, {useState} from 'react';
function App() {
  const sarray=[{name:"home",content:"this is home"},{name:"help",content:"this is help"},{name:"login",content:"this is login",}]
  
  return (
    <div className="App">
      
        <Tab array={sarray}/>
    </div>
  );
}

export default App;
