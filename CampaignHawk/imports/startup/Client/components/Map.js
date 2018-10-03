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
            {name: "database", description:"Data Layers"},
            {name: "user-plus", description:"Add Volunteer"},
            {name: "users", description:"View Volunteers"},
            {name: "bicycle", description:"Dispatcher"},
            {name: "list-ul", description:"View as List"},
            {name: ["far", "lightbulb"], description:"Campaign Autopilot"},
            {name: "list-ol", description:"Leaderboard"},
            {name: "chart-line", description:"Fancy Charts"},
            {name: "cog", description:"Settings"}
        ];
        /*Add in navlinks later */
        const list = iconList.map((item) => {
            return (
                <li key={item.name} 
                    onMouseEnter={this.props.setTooltipDescription.bind(null, item)}
                    onMouseOver={this.props.showTooltip}
                    onMouseOut={this.props.hideTooltip}
                    className="sidenav-list-item">
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
        const tooltipStyle = {
            top: this.props.tooltipY,
            left: this.props.tooltipX
        }
        if (this.props.showTooltipState) {
            tooltipStyle.opacity = "1";
            tooltipStyle.visibility = "visible";
        } else {
            tooltipStyle.opacity = "0";
            tooltipStyle.visibility = "hidden";
        }
        return (
            <div className="sidenav-tooltip" style={tooltipStyle}>
                <p>Data Layer</p>
                <div className="tail"></div>
            </div>
        )
    }
}

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state= {displayTooltip: false, tooltipX: "50px", tooltipY: "0px",
        tooltipDescription: ""};
        this.hideTooltip = this.hideTooltip.bind(this)
        this.showTooltip = this.showTooltip.bind(this)
        this.setTooltipDescription = this.setTooltipDescription.bind(this)
    } 

    setTooltipDescription (item) {
        this.setState({
            tooltipDescription: item.description
        })
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
        <SidenavTooltip
            tooltipDescription={this.state.tooltipDescription}
            showTooltip={this.state.showTooltip}
            tooltipX={this.state.tooltipX}
            tooltipY={this.state.tooltipY} />
     <ul className="sidenav-list">
       <SideNavIcons
        setTooltipDescription={this.setTooltipDescription}
        showTooltip={this.showTooltip}
        hideTooltip={this.hideTooltip} />
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