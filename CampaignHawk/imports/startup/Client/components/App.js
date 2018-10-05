import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Map from './Map';
import Login from './Login';
import AppNotFound from './AppNotFound';
import Modal from './Modal';
import { Meteor } from 'meteor/meteor';

export default class App extends Component {
    render() {
      return (
        <Switch>
        <Route exact path="/" component={Map} />
          <Route path="/modal" component={Modal} />
            <Route path="login" component={Login} />
            <Route component={AppNotFound} />
        </Switch>
      );
    }
  }
