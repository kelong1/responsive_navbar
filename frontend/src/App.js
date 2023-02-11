import React from 'react';
import { Header } from './components/Header';
import "./App.css"
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';


function App() {
  return (
    
    <div>
     <Header/>
     <Home/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
