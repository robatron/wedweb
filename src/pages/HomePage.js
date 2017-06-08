import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import './HomePage.css';
import logo from '../../img/logo.svg';

const OrigExample = () => (
  <div className='App'>
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h2>Welcome to React</h2>
    </div>
    <p className='App-intro'>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>Check out dis button:</p>
    <Button bsStyle="primary" bsSize="large">dis button</Button>
  </div>
);

export default OrigExample
