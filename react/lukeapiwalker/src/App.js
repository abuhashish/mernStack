
import './App.css';
import Search from './components/Search.jsx'
import React, { useState }from 'react'
import { Router } from '@reach/router';
import Show from './components/Show.jsx'
function App(props) {
  
  return (
    <div className="App">
      <Search path=""/>
      <Router>
        
        <Show path=":one/:two"/>
        </Router>
    </div>
  );
}

export default App;
