import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import globalStyles from '../assets/styles/global.css';

import Welcome from './Welcome.jsx';
import About from './About.jsx';
import DataFetcher from './DataFetcher.jsx';
import Champion from './Champion.jsx';
import ChampionList from './ChampionList.jsx';
import NoMatch from './NoMatch.jsx';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Welcome} />
    <Route path="/About" component={About} />
    <Route path="/championlist/" component={DataFetcher} />
    <Route path="/champion/" /*"+ champID"*/ component={Champion} />
    <Route path="*" component={NoMatch} /> 
  </Router>,
  document.getElementById('root')
);
// This product is not endorsed, certified or otherwise approved in any way by Riot Games, Inc. or any of its affiliates.
  
