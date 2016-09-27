import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import FontAwesome from 'react-fontawesome';

import {stars} from './stores.jsx';

export default class Star extends React.Component {
  render() {
    if (this.props.checked){
      var starStyle = {
        color:'#FFC90A',
      }  
    }
    else {
      var starStyle = {
        color:'grey'
      }
    }
    return (
      <FontAwesome name="star" style={starStyle} onClick={this.props.onToggle.bind(this,this.props.safe)} />
    )
  }
}

export default class ChampionList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      color:'grey'
    }
  }

  handleStarClick(key, e){
    var results =  _.find(this.props.starredChampions, { 'key':key });
    if (results){
      stars.find({
        key:key
      }).fetch().subscribe((star)=>{
        console.log(star)
        stars.remove(star)
      })
    }
    else {   
      stars.store({
        key:key
      })
    }
  }

   handleChampClick(id, e){
     browserHistory.push('/champions/'+ id)
   }
  
  render() {
    return (
      <div className="listBack">
        <div className="champListHolder" >
          <div >{this.props.champions.map((champion) => {
            if(_.find(this.props.starredChampions, { 'key':champion.key })){
              champion.checked=true
            }
            else{
              champion.checked=false
            }
            return (
              <div className="listChamp" key={champion.id} title={champion.title}  >
                <div>
                  <div className="starPinUnchecked"><Star safe={champion.key} checked={champion.checked} onToggle={this.handleStarClick.bind(this)} style={{color:this.state.color}} /></div>
                  <div className="champListName" onClick={this.handleChampClick.bind(this, champion.id)}>{champion.name}</div> 
                  <div className="champListImg" onClick={this.handleChampClick.bind(this, champion.id)}><img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+champion.key+"_0.jpg"} /></div>    
                </div>  
              </div>   
            )
          })}
          </div>
        </div>
      </div>  
    )
  }
}
