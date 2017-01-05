import React from 'react';
import { render, findDOMNode, ReactDOM } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './components/app';
import Home from './components/pages/home';
import About from './components/pages/about';
import Skills from './components/pages/skills';
import Projects from './components/pages/projects';
import allReducers from './reducers';


const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers( applyMiddleware(thunk, logger) ));


render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/" component={Home} name="home" />
                <Route path="/about" component={About} name="about" />
                <Route path="/skills" component={Skills} name="skills" />
                <Route path="/projects" component={Projects} name="projects" />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));

