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
        <li onClick={this.changeRoute.bind(this, '/about','cornertopleft')}>About me</li>
        <li onClick={this.changeRoute.bind(this, '/resume','cornertopleft')}>Resume</li>
        </ul>
      </nav>
    );
  }
}
export default Nav;