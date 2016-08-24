import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import FontAwesome from 'react-fontawesome';

import {stars} from './stores.jsx';

export default class Star extends React.Component {
  render() {
    if (this.props.checked){
      var starStyle = {
        color:'#FFC90A',
        border:'1px solid #333',
        borderRadius:'25px',
        backgroundColor: '#333',
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

//<FontAwesome name="star" />

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
    console.log(key, e)  //When clicking star, console logs the name the star belongs to
  }


/*  handleChampClick(e){
    e.preventDefault()
    browserHistory.push('/champion/'+this.champion.name)
  }
*/  

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
              <div className="listChamp" key={champion.id} title={champion.title} /*onClick={this.handleChampClick.bind(this)}*/>
                <div>
                  <div className="starPinUnchecked"><Star safe={champion.key} checked={champion.checked} onToggle={this.handleStarClick.bind(this)} style={{color:this.state.color}} /></div>
                  <div className="champListName">{champion.name}</div> 
                  <div className="champListImg"><img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+champion.key+"_0.jpg"} /></div>    
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

//GOOD, WORKS, FULL SQUARE PICS<div><img src={"http://ddragon.leagueoflegends.com/cdn/6.16.2/img/champion/"+champion.image.full} /></div>  
