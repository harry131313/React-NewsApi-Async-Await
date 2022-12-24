import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  // c = "shri"
  render() {
    return (
      <>
    {/* <Navbar/> */}
    
    <BrowserRouter>
      <Navbar />
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<News key="health" country = "us" category = "health" />} />
        <Route exact path="sports" element={<News key="sports" country = "us" category = "sports" />} />
        <Route exact path="technology" element={<News key="technology" country = "us" category = "technology" />} />
        <Route exact path="science" element={<News key="science" country = "us" category = "science" />} />
        <Route exact path="general" element={<News key="general" country = "us" category = "general" />} />
      </Routes>
      </div>
    </BrowserRouter>
    
      </>
    )
  }
}



