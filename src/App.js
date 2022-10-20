import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const App =()=>{
  
 
    return (

      <div className="App">
            <Navbar></Navbar>
            <Content></Content>
          

        
      </div>
    );
  
}


export default App
