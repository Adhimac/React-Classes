import React from 'react';
import './App.css'
import Aboutpage from './Components/Aboutpage/Aboutpage';
import Contactpage from './Components/Contactpage/Contactpage';
import Home from './Components/Homepage/Homepage'
import Nav from './Components/Navbar/Navbar'
import { BrowserRouter as Router , Routes, Route,} from "react-router-dom";
function App() {


  return (
    <>
   
 <Router>
  <Nav/>
    <Routes>
    <Route path='/' element={<Home name="Homepage"/>} />
    <Route path='/About' element={<Aboutpage name="Aboutpage" />}/>
    <Route path='/Contact' element={<Contactpage name="Contactpage" />}/>
   
  </Routes>
 </Router>



    </>
  )
}

export default App
