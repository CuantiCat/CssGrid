import React from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { Dishes } from "./components/Dishes";
import { Menu } from "./components/Menu";

function App() {
  return (
    <React.Fragment>
      <Hero/>
      <Dishes/>
      <Menu/>
    </React.Fragment>
  );
}

export default App;