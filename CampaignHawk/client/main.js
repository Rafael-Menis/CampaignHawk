import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './main.html';

Meteor.startup (() => {
  render ((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));
});
