import logo from './logo.svg';
import './App.css';
import FruitForm from './components/biteapp.jsx'
import Todo from './components/Todo.jsx';
import React,{ useState} from 'react'
import Show from './components/Show.jsx'

function App() {
  const array=[];
  const[List,setList]=useState(array)

  const addLift =(x)=>{
    
    const test={task:x,isChecked:false}
    
    setList([...List, test]);
    console.log(List)
  }


  return (
    
    <div className="App">
        <Todo onLift={addLift}/>
        <Show list={List}/>
    </div>
  );
}

export default App;
