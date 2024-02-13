// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';

function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type)=>{
      setAlert({
        msg: massage,
        typ: type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }


  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }

  }


  return (
    <>
    {/* <Navbar title="Demoutils" aboutpage="AboutUs"/> */}
    {/* <Navbar/> */}

    <Navbar title="Demoutils" aboutpage='AboutUs' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text below" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
