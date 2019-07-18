import React from "react";
// import logo from '../../assets/images/lemons-and-limes.jpg'
import "../../../src/App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Image from '../image/Image';
import ClickItem from "../clickItem";
// import Header from '../Header/Header';
import fruit from "../../assets/fruit.json";
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
          {/* <h1> What The Fruit</h1> */}
          {/* fa fa camera button onclick to open image canvas */}
          {/* <button className="btn btn-primary"><Link to="/image">Start Scanning Fruit</Link></button> */}
        </header>
        {/* {this.state.Fruit.map(item => (
            <ClickItem
              key={item.id}
              id={item.id}
              handleClick={this.handleItemClick}
              image={item.image}
            /> */}
        {fruit.map(x => (
          <li>{x.image}</li>
        ))}
        <ClickItem />
        {/* <Image></Image> */}
      </div>
    </Router>
  );
}
export default Home;