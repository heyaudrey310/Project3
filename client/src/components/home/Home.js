import React from 'react';
// import logo from './logo.svg';
import '../../../src/App.css';
import { Link } from 'react-router';
// import '../Form/Form';

function Home() {
  return (
    <div className="App">
    <div idname="root"></div>
     <header className="App-header">
      <h1> What The Fruit</h1>
        <button className="btn btn-primary"><Link to="/image">Start Scanning Fruit</Link></button>
      </header>
    </div>
  );
}

export default Home;

//  {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1> What The Fruit</h1>
//         <button className="btn btn-primary" onClick={this.handleIncrement}>
//             Start Scanning Fruit
//           </button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}