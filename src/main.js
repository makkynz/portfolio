import React from 'react';
import { render, findDOMNode, ReactDOM } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';

render((
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
        </Route>
    </Router>
), document.getElementById('app'));

