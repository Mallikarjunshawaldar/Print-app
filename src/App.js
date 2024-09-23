import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/Home.js";
import Footer from "./Components/Footer/Footer.js";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
};

export default App;
