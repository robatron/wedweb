import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import OrigExample from './pages/HomePage';
import './index.css';
import {navItems} from './common/config';
import About from './pages/AboutPage';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <hr/>

      <Route exact path='/' component={OrigExample}/>
      <Route path='/about' component={About}/>
    </div>
  </Router>,
  document.getElementById('root')
);
