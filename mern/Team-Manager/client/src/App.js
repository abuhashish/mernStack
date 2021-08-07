import {React,useEffect,useState} from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Game from './views/Game'
const App = () => {
  return (
    <div>
      <Router>
        <Main path="/"/>
        <New path="/new"/>
        <Game path="/game/:id"/>
      </Router>
    </div>
  )
}


export default App