import React from 'react';
// import logo from '../../assets/images/lemons-and-limes.jpg'
import '../../../src/App.css';
import {  BrowserRouter as Router } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Image from '../image/Image';
import ClickItem from "../clickItem";
import Header from '../Header/Header';
import Fruit from "../../assets/fruit.json";





function Home() {
  return (
   
    <Router>
      <div className="App">
      <div idname="root"></div>
      <header className="App-header">
        <div className="title"> 
        <h1> What The <br></br>Fruit</h1>
        </div>
        {/* <h1> What The Fruit</h1> */}
        {/* fa fa camera button onclick to open image canvas */}
          {/* <button className="btn btn-primary"><Link to="/image">Start Scanning Fruit</Link></button> */}
        </header>
        <Header></Header> 
        {/* {this.state.Fruit.map(item => (
            <ClickItem
              key={item.id}
              id={item.id}
              handleClick={this.handleItemClick}
              image={item.image}
            /> */}
        <Fruit></Fruit>
        <ClickItem></ClickItem>
        {/* <Image></Image> */}
      </div>
    </Router>
  );
}

export default Home;
