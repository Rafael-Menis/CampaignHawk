import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from './Map';
import Login from './Login';
import AppNotFound from './AppNotFound';
import { Meteor } from 'meteor/meteor';

const App = () => (
    <Router>
        <Switch>
            <div>
            <Route exact path="/" component={Map} />
            <Route path="login" component={Login} />
            <Route component={AppNotFound} />
            </div>
        </Switch>
    </Router>
);

export default App