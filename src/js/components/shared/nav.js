import React from 'react';
import { Router, Route,  browserHistory } from 'react-router';

class Nav extends React.Component {
 
  changeRoute(route, direction){   
    window.reveal(direction, function(){
          browserHistory.push(route);
    });
  }

  render() {
     
    let currPath = this.context.location.pathname;    
    return (     
      <nav>
        <ul>
        <li 
          onClick={this.changeRoute.bind(this, '/','cornertopleft')} 
          className={(currPath == '/' ? 'active' : '')} >
          Home
        </li>
        <li 
          onClick={this.changeRoute.bind(this, '/about','cornertopleft')}
          className={(currPath == '/about' ? 'active' : '')}>
          About
        </li>
        <li 
          onClick={this.changeRoute.bind(this, '/skills','cornertopleft')}
          className={(currPath == '/skills' ? 'active' : '')}>
          Skills
        </li>
        <li onClick={this.changeRoute.bind(this, '/projects','cornertopleft')}
        className={(currPath == '/projects' ? 'active' : '')}>
          Projects
        </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;

Nav.contextTypes = {
    location: React.PropTypes.object
}