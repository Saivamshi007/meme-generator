import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'

class App extends Component {
  render() {

    return (

      <div className="main-container">
        <Header/>
        <MemeGenerator/>
        


      </div>
      
    );
  }
}

export default App;
