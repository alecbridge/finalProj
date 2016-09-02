import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import _ from 'lodash';

import {stars} from './stores.jsx';

import ChampionList from './ChampionList.jsx';

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

export default class DataFetcher extends React.Component {
  constructor(props){
    super(props);
    this.state={
      champions: [],
      starredChampions: []
    };
    this.getData();
    this.fetchStars();
  }

  fetchStars(){
    stars.watch().subscribe((stars)=>{
      console.log(stars)
      this.setState({
        starredChampions:stars
      })
    })
  }

  getData(){
    fetchJSON('/api/champions/').then((json) => {
      this.setState({champions:_.values(json.data)})
    })
  }

  render() {
    return (
      <div>
      <ChampionList champions={this.state.champions} starredChampions={this.state.starredChampions} />
      </div>
    )
  }
}
