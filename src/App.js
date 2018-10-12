import React, { Component } from 'react';
import './App.css';
import router from './route';
import Nav from './component/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      <br/>
        {router}
      </div>
    );
  }
}

export default App;
