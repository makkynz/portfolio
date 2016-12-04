import React from 'react';
import { render, findDOMNode, ReactDOM } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router';
import counter from './components/counter';
import blog from './components/blog';
 

render((
 <Router history={browserHistory}>
    <Route path="/" component={counter}/>
    <Route path="/blog" component={blog}/>      
  </Router>
), document.getElementById('app'));