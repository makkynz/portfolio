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
import Resume from './components/pages/resume';
import Projects from './components/pages/projects';
import allReducers from './reducers';


const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers( applyMiddleware(thunk, logger) ));


render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));

