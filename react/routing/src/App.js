import React from 'react';
import { Router } from '@reach/router';
import Home from "./components/home.jsx"

function App() {
  return (
    <div className="App">
        <Router >
            <Home path="home"/>
            <Home path=":id"/>
            <Home path=":id/:color/:bgcolor"/>
        </Router>
    </div>
  );
}
export default App;