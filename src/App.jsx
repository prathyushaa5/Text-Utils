import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar'
import './App.css'
import TextArea from './Components/TextArea'
import Alert from './Components/Alert'
import About from './Components/About';
function App() {
  const [darkMode,setDark]=useState(false);
  const [color,setColor]=useState("white")
  const [option,setOption]=useState("Dark Mode")
  const [alert,setAlert]=useState(null)
  function toggleMode() {
    if (!darkMode) {
      setColor("gray");
      setDark(true);
      setOption("Light Mode")
      showAlert("Dark Mode has been enabled","success")
      // document.body.style.backgroundColor = "black"; // Dark mode background
      document.body.style.color = "white"; // Dark mode text color
      
    } else {
      setColor("white");
      setDark(false);
      setOption("Dark Mode")
      // document.body.style.backgroundColor = "#f7fafc"; // Light mode background
      showAlert("Light Mode has been enabled","success")
      document.body.style.color = "black"; // Light mode text color
    }
  }

  function showAlert(message,type){
    setAlert({
      msg:message,
      type:type
    }
    )
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  

  return (

    <Router> 

    
      <Alert alert={alert}/>
      <Navbar  title="Text Utils" mode={darkMode} color={color}toggleMode={toggleMode } option={option}/>
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={<TextArea mode={darkMode} color={color} toggleMode={toggleMode} option={option} showAlert={showAlert} />} 
        />
        
        {/* About Route */}
        <Route path="/about" element={<About mode={darkMode} color={color} toggleMode={toggleMode} option={option} showAlert={showAlert} />} />
        
      </Routes>

     
     </Router>

   
    
  );
}

export default App;
