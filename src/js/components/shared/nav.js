import React from 'react';
import { Router, Route,  browserHistory } from 'react-router';

class Nav extends React.Component {
 
  changeRoute(route, direction){   
    window.reveal(direction, function(){
          browserHistory.push(route);
    });
  }

  render() {
    return (
      <nav>
        <ul>
        <li onClick={this.changeRoute.bind(this, '/','cornertopleft')}>Home</li>
        <li onClick={this.changeRoute.bind(this, '/about','cornertopleft')}>About</li>
        <li onClick={this.changeRoute.bind(this, '/skills','cornertopleft')}>Skills</li>
        <li onClick={this.changeRoute.bind(this, '/projects','cornertopleft')}>Projects</li>
        </ul>
      </nav>
    );
  }
}
export default Nav;