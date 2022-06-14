import './App.css';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
import About from './components/About';



function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
}

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enable", "primary")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enable", "primary")
    }
  }

  setTimeout(() => {
    setAlert(null);   
  }, 3000);

  return (
    <div >
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert}/>
      {/* <TextUtils mode={mode}/> */}
      <About/>
    </div>

  );
}

export default App;
