import React from 'react';
import './App.css';
import Header from './Components/Header/Header.component';
import Home from './Components/Home/Home.component';
import { Routes, Route } from "react-router-dom";
import SignIn from './signin.js';
import Footer from './Components/Footer/Footer.component';

function App() {
  return (
    
    <div className="App">
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='signin' element={<SignIn />} />
      </Routes>

      <Footer></Footer>
     
    </div>
    
  );
}

export default App;
