import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Champion extends React.Component {
  render() {
    console.log(this.props.champion)
    return (
      <div>A single champion's page. {this.props.champion.name}</div>
    )
  }
}