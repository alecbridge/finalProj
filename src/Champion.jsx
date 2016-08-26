import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Champion extends React.Component {
  render() {
    const { params } = this.props;
    const { champion } = params;
    return (
      <div>A single champion's page. {champion.name}</div>
    )
  }
}