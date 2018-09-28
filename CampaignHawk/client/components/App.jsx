import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from './Map';
import Login from './Login'

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Map} />
            <Route path="login" component={Login} />
        </Switch>
    </Router>
);

export default App