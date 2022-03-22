
import './App.css';
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Form from "./components/Form";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
  
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user,setLoginUser] = useState({
 
  })
  return (
    <div className="App">
      <Navigation/>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/form" element={<Form/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;