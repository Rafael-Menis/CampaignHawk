import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../imports/startup/Client/components/App';

import '../imports/startup/Client/main.html';

Meteor.startup (() => {
  ReactDOM.render ((
  <Router>
    <App />
  </Router>
  ), document.getElementById('root'));
});
