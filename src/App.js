import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // if dark mode is enabled or not

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    // this is the object
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)

    }, 2000);
  }

  const removeClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }


  const toggleMode = (cls) => {
    removeClass();
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been set", " Success ");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been set", " Success ");
    }
  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="Nitin's Text utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Textform mode={mode} showAlert={showAlert}/>
        {/* <div className="container">
          <Routes>
            <Route exact path="/" element={<Textform heading="enter your text here!" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/About" mode={mode} toggleMode={toggleMode}  element={<About/>} />
          </Routes> */}
        {/* </div> */}
      {/* //</Router> */}
    </>
  );
}

export default App;
