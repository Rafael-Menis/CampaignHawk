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

class SideNavIcons extends Component {
    render () {
        const iconList = [
            {name: "database", description:""},
            {name: "user-plus", description:""},
            {name: "users", description:""},
            {name: "bicycle", description:""},
            {name: "list-ul", description:""},
            {name: ["far", "lightbulb"], description:""},
            {name: "list-ol", description:""},
            {name: "chart-line", description:""},
            {name: "cog", description:""}
        ];
        /*Add in navlinks later */
        const list = iconList.map((item) => {
            return (
                <li key={item.name} className="sidenav-list-item">
                    <FontAwesomeIcon icon={item.name} />
                </li>
            )
        })
        return (
            <div>
                {list}
            </div>
            
        )
    }
}
       

class SidenavTooltip extends Component {
    render () {
        return (
            <div className="tooltipstyle">
                <p>Data Layer</p>
                <div className="tail"></div>
            </div>
        )
    }
}

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
            tooltipY: e.target.offsetTop +
            (e.target.offsetHeight / 2) + "px"
        })
    }

    render () {
        return (
    <Router>
    <div className="sidenav">
        <SidenavTooltip />
     <ul className="sidenav-list">
       <SideNavIcons />
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