import React from 'react';
//import Calendly from './components/Calendar';
// import Navbar from './components/Navbar';
// import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import FileUploadPage from './components/uploadFile'

function App() {
  return ( 
    <>
    <div className="header">
      <Header/>
    </div>
    <div>  
    <FileUploadPage/>
    </div>
    </>
  );
}

export default App;
