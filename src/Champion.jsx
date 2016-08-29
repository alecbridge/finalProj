import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Champion extends React.Component {
  render() {
    console.log(this.props.champion)
    return (
      <div className="listBack">
        <div className="champListHolder">
          <div className="champTop">
            <div className="topImageHolder">
              <div className="topImage">
              

              </div>
            </div>
            <div className="champHeader">
              <div className="champName">{this.props.champion.name} </div>
              <div className="champTitle">{this.props.champion.title} </div>
            </div>
            <div className="topStats"> 
              <div className="statsTitle">Stats</div>
                <div className="statsArea">
                  <div className="statAreaTop">
                    <span>Health:</span>
                    <div>{this.props.champion.stats.hp} </div>
                    <span>Health Per Level:</span>
                    <div>{this.props.champion.stats.hpperlevel}</div>
                    <span>Move Speed:</span>
                    <div>{this.props.champion.stats.movespeed} </div>
                  </div>  
                  <div className="statsAreaBot">
                    <span>Attack Damage:</span>
                    <div>{this.props.champion.stats.attackdamage}</div>
                    <span>Armor:</span>
                    <div>{this.props.champion.stats.armor}</div>
                    <span>Magic Resist:</span>
                    <div>{this.props.champion.stats.spellblock}</div>
                  </div>
                </div>
            </div>
          </div>
          <div className="champBot">
            <div className="botTitle">Abilities</div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/passive/" + this.props.champion.passive.image.full} /></div>
              <div className="spellName">Passive: {this.props.champion.passive.name} </div>
              <div className="spellDesc">{this.props.champion.passive.description}</div>
            </div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/spell/"+ this.props.champion.spells[0].image.full} /></div>
              <div className="spellName">{this.props.champion.spells[0].name} </div>
              <div className="spellDesc">{this.props.champion.spells[0].description}</div>
            </div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/spell/"+ this.props.champion.spells[1].image.full} /> </div>
              <div className="spellName">{this.props.champion.spells[1].name} </div>
              <div className="spellDesc">{this.props.champion.spells[1].description} </div>
            </div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/spell/"+ this.props.champion.spells[2].image.full} /> </div>
              <div className="spellName">{this.props.champion.spells[2].name} </div>
              <div className="spellDesc">{this.props.champion.spells[2].description} </div>
            </div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/spell/"+ this.props.champion.spells[3].image.full} /> </div>
              <div className="spellName">{this.props.champion.spells[3].name} </div>
              <div className="spellDesc">{this.props.champion.spells[3].description} </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


//splash image <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.champion.key+"_0.jpg"} />