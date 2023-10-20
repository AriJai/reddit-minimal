import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header.js';
import Subreddit from './components/Subreddit.js';
import Content from './components/Content.js';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <Content />
        <Subreddit />
      </div>
    </div>
  );
}

export default App;
