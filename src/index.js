import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './index.css';
import pages from './pages'
import Navbar from './components/NavbarComponent';

ReactDOM.render(
  <Router>
    <div>
      <Navbar pages={pages} />
      {pages.map((page, idx) => (
        <Route key={idx} exact path={page.route} component={page.pageComponent}/>
      ))}
    </div>
  </Router>,
  document.getElementById('root')
);
