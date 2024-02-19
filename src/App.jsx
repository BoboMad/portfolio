import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
   <>
      <Navigation/>
      <Banner/>
      <Skills/>
   </>
  )
}

export default App
