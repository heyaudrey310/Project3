import React from 'react';
import '../../../src/App.css';
import {  BrowserRouter as Router } from 'react-router-dom';
 //import { Link } from 'react-router-dom';
import Image from '../image/Image';
 //import { Header } from '../Header/Header';








function Home() {
  return (
    <Router>
      <div className="App">
        <div idname="root" />
        <header className="App-header">
          <div className="title">

            <h1>
              {" "}
              What The <br />
              Fruit
            </h1>
          </div>
           {/* <h1> What The Fruit</h1>  */}
          {/* fa fa camera button onclick to open image canvas  */}
           {/* <button className="btn btn-primary"><Link to="/image">Start Scanning Fruit</Link></button>  */}
        </header>

        {/* <Header></Header> */}

        <Image></Image>
      </div>
      
    </Router>
  );
}
export default Home;