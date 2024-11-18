import React from 'react';
import Home from './pages/home';
import Header from './components/Header';
import './App.css';
import About from './pages/aboutme';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
