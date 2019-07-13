import React from 'react';
// import logo from './logo.svg';
import '../../../src/App.css';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Image from '../image/Image';

function Home() {
  return (
    <Router>
      <div className="App">
      <div idname="root"></div>
      <header className="App-header">
        <h1> What The Fruit</h1>
          <button className="btn btn-primary"><Link to="/image">Start Scanning Fruit</Link></button>
        </header>
        <Image></Image>
      </div>
    </Router>
  );
}

export default Home;
