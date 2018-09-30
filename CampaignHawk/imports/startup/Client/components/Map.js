import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

/* React Router Dom v4 allows for creating nav links with built in styling directly */

const SideNav = () => (
    <Router>
        <div>
         <ul>
            <li>
                items
            </li>
            <li>
                test
            </li>
         </ul>
        </div>
    </Router>
)
const Map = () => (
    <Router>
    <div>
    <SideNav />
   
    <h1>This is where the map goes</h1>
    </div>
    </Router>
)

export default Map