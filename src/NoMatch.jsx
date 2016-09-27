import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';

export default class NoMatch extends React.Component {
  render() {
    return (
      <div className="noMatchBack">
        <div className="errorMessage">
          <span>Error: 404 </span>
          <p>Page Not Found</p>
          <p>Click <Link to='/champions/'>Here</Link> to Return to Our Champion List</p>
        </div>
      </div>
    )
  }
}