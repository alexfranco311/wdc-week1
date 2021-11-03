import React from 'react';
import Navbar from './nav/navbar.jsx';
import Body from './body.jsx';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <p className="foot">Created by Alex Franco for the <a href="https://discord.gg/x6YBY8QdDf" target="blank">WebDev Challenge Discord Server</a>, Week 1</p>
    </div>
  );
}

export default App;
