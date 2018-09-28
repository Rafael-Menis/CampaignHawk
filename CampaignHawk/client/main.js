import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './main.html';

Meteor.startup (() => {
  render ((
  <Router>
    <App />
  </Router>
  ), document.getElementById('root'));
});
