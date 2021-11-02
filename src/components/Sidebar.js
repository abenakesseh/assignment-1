import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return(
      <div id="sidebar">
        <ul>
          <li><Link to="/">The Basics</Link></li>
          <li><Link to="/types">Types of Climbing</Link></li>
          <li><Link to="/safety">Safety</Link></li>
          <li><Link to="/equipment">Equipment</Link></li>
          <li><Link to="/Where">Where to Climb</Link></li>
        </ul>
		  </div>
    )
  }
}

export default Sidebar;