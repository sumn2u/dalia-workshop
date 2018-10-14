import React, { Component } from 'react';
import './App.css';
import Router from './routes/router';

class App extends Component {
  render() {
    return <Router {...this.props} />;
  }
}

export default App;
