import react, { useState, useEffect, useMemo } from 'react'
import Home from './components/Home'
import About from './components/About'
import ThemeContext from './Context/Generalcontext';
import './App.css';

function App() {

  return (
    <div className="container">
      <ThemeContext>
        <Home />
        <About />
      </ThemeContext>
    </div>
  );

}

export default App;
