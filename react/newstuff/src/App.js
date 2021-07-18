import logo from './logo.svg';
import './App.css';
import React,{ useState} from 'react'
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import Coloredbox from './components/Coloredbox.jsx';
import Box from './components/Box.jsx';
function App() {
  const colors=[]
  const [color,setColor]=useState(colors)
  const addnewcolor =(x)=>{
    setColor(color.concat(x))
  }

  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  return (
    <div className="App">
              {/* <MessageForm onNewMessage={ youveGotMail } />
            <MessageDisplay message={ currentMsg } /> */}
            <Coloredbox onNewColor={addnewcolor} />
            <Box color={color} />
            
    </div>
  );
}

export default App;
