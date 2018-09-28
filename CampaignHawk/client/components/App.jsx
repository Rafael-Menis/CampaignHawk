import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from './Map';
import Login from './Login';
import AppNotFound from './AppNotFound';
import { Meteor } from 'meteor/meteor';

const App = () => (
    <Router>
    <div>
        <Switch>
            <Route exact path="/" component={Map} />
            <Route path="login" component={Login} />
            <Route component={AppNotFound} />
        </Switch>
    </div>
    </Router>
);

export default App