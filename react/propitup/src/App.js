import logo from './logo.svg';
import './App.css';
import TestComp from './components/TestComp';
import PersonCard from './components/PersonCard';
import UserForm from './components/userForm';
import MovieForm from './components/MovieForm';
import ListWithAddItem from './components/test';
import Form from './components/Form';
import Counter from './components/testme'
function App() {
  return (
    <div className="App">
        
        <PersonCard firstName={"amro"} lastName={"abuhashish"} age={5}/>
        
    </div>
  );
}

export default App;
