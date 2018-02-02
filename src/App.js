import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/home.js'
import Detail from './components/detail.js'
class App extends Component {
  render() {
    return (
        <Router>     
                {/*一级子组件引入 */}
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/detail" component={Detail} />   
            </div>    
        </Router>
    );
  }
}

export default App;
