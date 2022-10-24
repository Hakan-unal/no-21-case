import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const App = () => {


  return (

    <div className="App">
      <Navbar></Navbar>
      <Content></Content>



    </div>
  );

}


export default App
