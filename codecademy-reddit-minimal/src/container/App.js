import './App.css';
import React, { useState, useEffect } from "react";
import { createSlice } from '@reduxjs/toolkit';
import Header from '../features/header/Header.js';
import Subreddit from '../features/subreddit/Subreddit.js';
import Content from '../features/content/Content.js';
import Sidebar from '../features/sidebar/Sidebar.js';

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
