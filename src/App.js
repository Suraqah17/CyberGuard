import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import Header from './components/header.jsx'; // Importing the Header component
import Navbar from './components/navbar.jsx';
import Slider from './components/scroller.jsx';
import Procedure from './components/procedure.jsx';
import Linkrepo from './components/linkrepo.jsx';
import Footer from './components/footer.jsx';
import Register from './components/register.jsx'; // Importing the Register component
import Login from './components/login.jsx';
import Regcomp from './components/regcomp.jsx';
const App = () => {
  return (
    <Router> {/* Wrap your entire application with BrowserRouter */}
      <div className='main'>
      <Header /> {/* Using the Header component */}
      <Navbar/>
        <Routes> {/* Wrap all your routes with Routes */}
          <Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/regcomp" element={<Regcomp />} /> 
        </Routes>
      <Linkrepo/>
      <Footer/>
      </div>
    </Router>
  );
}

// Define the Home component to include Slider, Procedure, Linkrepo, and Footer
const Home = () => (
  <>
   
    <Slider/>
    <Procedure/>
    
  </>
);

export default App;
