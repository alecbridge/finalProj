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

export default class ChampionPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      champions: [],
    };
    this.getData();
  }
  getData(){
    fetchJSON('http://localhost:3001/champions/:championName').then((json) => {
      this.setState({champions:_.values(json.data)})
    })
  }
  render() {
    return (
      <div>
        <Champion champion={this.state.champion} />
      </div>
    )
  }
}