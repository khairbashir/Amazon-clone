import React from 'react';
import './App.css';
import Header from './Components/Header/Header.component';
import Home from './Components/Home/Home.component';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header/>

      {/* main */}
      <Home/>


    </div>
  );
}

export default App;
