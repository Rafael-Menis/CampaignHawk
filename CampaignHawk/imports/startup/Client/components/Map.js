import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { BrowserRouter as Router, Link } from 'react-router-dom';

/*Adding fontawesome icons to the library, so they can be accessed later*/
library.add(fas)
library.add(far)
/* React Router Dom v4 allows for creating nav links with built in styling directly */

        const iconList = [
            "database",
            "user-plus",
            "users",
            "bicycle",
            "list-ul",
            ["far", "lightbulb"],
            "list-ol",
            "chart-line",
            "cog"
        ];
        /*Add in navlinks later */
        const list = iconList.map((item) => {
            return (
                <li key={item} className="sidenav-list-item">
                    <FontAwesomeIcon icon={item} />
                </li>
            )
        })

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state= {displayTooltip: false, tooltipX: "50px", tooltipY: "0px"};
        this.hideTooltip = this.hideTooltip.bind(this)
        this.showTooltip = this.showTooltip.bind(this)
    } 

    hideTooltip (e) {
        this.setState({displayTooltip: false})
    }

    showTooltip (e) {
        this.setState({displayTooltip: true,
            tooltipY: e.nativeEvent.target.offsetTop +
            (e.nativeEvent.target.offsetHeight / 2) + "px"
        })
    }

    render () {
        return (
    <Router>
    <div className="sidenav">
     <ul className="sidenav-list">
       {list}
     </ul>
    </div>
    </Router>
    )
    }
} 
    

const Map = () => (
    <Router>
    <div className="map">
    <SideNav />
   
    <h1>This is where the map goes</h1>
    </div>
    </Router>
)

export default Map