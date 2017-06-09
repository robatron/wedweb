import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './index.css';
import pages from './pages'
import Navbar from './components/NavbarComponent';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <ul>
          {pages.map((page, idx) => (
            <li key={idx}><Link to={page.route}>{page.displayName}</Link></li>
          ))}
        </ul>

        <hr/>

        {pages.map((page, idx) => (
          <Route key={idx} exact path={page.route} component={page.pageComponent}/>
        ))}
      </div>
    </Router>
    <Navbar/>
  </div>,
  document.getElementById('root')
);
