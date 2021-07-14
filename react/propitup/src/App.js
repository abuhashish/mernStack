import logo from './logo.svg';
import './App.css';
import TestComp from './components/TestComp';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
        <PersonCard firstName={"amro"} lastName={"ahmad"} age={5}/>
    
        
    </div>
  );
}

export default App;
