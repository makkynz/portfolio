import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: 0,
    };
  }

  
  render() {
    return (
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About me</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      </ul>
    );
  }
}
export default Nav;