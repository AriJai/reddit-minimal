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
      <main className="wrap">
        <div className="content container">
          <Content />
          <Subreddit />
        </div>
      </main>
    </div>
  );
}

export default App;
