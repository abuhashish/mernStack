import logo from './logo.svg';
import './App.css';
import TestComp from './components/TestComp';
function App() {
  return (
    <div className="App">
        <TestComp firstName={"amro"} lastName={"ahmad"} age={5}/>
        <TestComp firstName={"test  "} lastName={"test"} age={5}/>
        <TestComp firstName={"test123"} lastName={"test123"} age={5}/>
        <TestComp firstName={"tryme"} lastName={"tryme"} age={5}/>
        
    </div>
  );
}

export default App;
