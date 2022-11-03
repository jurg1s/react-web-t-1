import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Pricing from "./components/Pricing";
import Home from "./components/Home";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pricing":
      component = <Pricing />;
      break;
    case "/about":
      component = <About />;
      break;
  }

  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
