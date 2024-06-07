import './App.css';
import React, { useEffect } from 'react';
import Footer from './components/footer';
import AdminUI from './AdminUI';

function App() {
  const eventfun =() =>{
    fetch("/event");
    
  }
  useEffect(() =>{
    eventfun();
  },[]);
  return (
    <>
      {/* <UserUI/> */}
      <AdminUI/>
      <Footer></Footer>
    </>
  );
}

export default App;
