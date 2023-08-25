
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Todolist from './components/todolist';

function App() {
  
  const[darkMode, setDarkMode] = useState(false)

  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={darkMode ? "App-dark" : "App"}>
      <Navbar 
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode}/>
      <Todolist />
    </div>
  );
}

export default App;
