import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import  Home from './components/home.js'
class App extends Component {
  render() {
    return (
        <Router>
            <div id="App">
                {/*一级子组件引入 */}
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    );
  }
}

export default App;
