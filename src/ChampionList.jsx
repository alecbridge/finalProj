import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class ChampionList extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="listBack">
        <div className="champListHolder" >
          <div >{this.props.champions.map(function(champion){
            return (
              <div className="listChamp" key={champion.id} title={champion.title}>
                <div>
                  <div className="champListImg"><img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+champion.key+"_0.jpg"} /></div>
                  <div className="champListName">{champion.name}</div> 
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
