import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import  Filtermovie from './Components/Filtermovie';
import Footer from './Components/Footer';
import Rating from './Components/Rating';

function App() {
  
  
  return (
    <div className="App" style={{textAlign: 'center', backgroundColor: 'grey', marginTop: '0px'}}>
  
   <Filtermovie/>  
   <Cards/>
  
   <Footer/>
    </div>
  );
}

export default App;
