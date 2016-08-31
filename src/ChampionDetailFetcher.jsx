import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import _ from 'lodash';

import Champion from './Champion.jsx';

function fetchJSON(url) {
  return fetch(url).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json();
    } else {
      console.log("Oops, we haven't got JSON!");
    }
  });
}

export default class ChampionDetailFetcher extends React.Component {
  constructor(props){
    super(props);
    this.state={}
    this.getData();
  }
  getData(){
    fetchJSON('http://localhost:3001/champions/'+ this.props.params.championId).then((json) => {
      this.setState({champion:json})
    })
  }
  render() {
    return (
      <div>
      {this.state.champion ? <Champion champion={this.state.champion} /> : null}
      </div>
    )
  }
}