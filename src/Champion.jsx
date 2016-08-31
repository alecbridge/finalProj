import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Champion extends React.Component {
  render() {
    var {hp, hpperlevel, movespeed, attackdamage, armor, spellblock}=this.props.champion.stats
    console.log('LOOK FOR THIS' ,hp)
    console.log('NUMBER TWO', this.props)
    return (
      <div className="championBacker">
        <div className="topImageHolder">
          <div className="topImage">
            <img className="topImage" src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.champion.key+"_0.jpg"} />
            <div className="champHeader">
              <div className="champName">{this.props.champion.name} <div className="champTitle">{this.props.champion.title}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="champHolder">
          <div className="champTop">             
              <div className="statsTitle">Stats</div>
                <div className="statsArea">
                  <div className="statsAreaLeft">
                    <div className="offense">Offense </div>
                    <span>Attack Damage:</span>
                    <div>{this.props.champion.stats.attackdamage}</div>
                    <span>Attack Range:</span>
                    <div>{this.props.champion.stats.attackrange}</div>
                    <span>Movement Speed:</span>
                    <div>{this.props.champion.stats.movespeed} </div>
                  </div>
                  <div className="statsAreaRight">
                    <div className="defense"> Defense</div>
                    <span>Health:</span>
                    <div>{this.props.champion.stats.hp} </div>
                    <span>Armor:</span>
                    <div>{this.props.champion.stats.armor}</div>
                    <span>Magic Resist:</span>
                    <div>{this.props.champion.stats.spellblock}</div>
                  </div>  
                </div>   
          </div>
          <div className="champBot">
            <div className="botTitle">Abilities</div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/passive/" + this.props.champion.passive.image.full} /></div>
              <div className="spellName">Passive: {this.props.champion.passive.name} </div>
              <div className="spellDesc">{this.props.champion.passive.sanitizedDescription}</div>
            </div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/spell/"+ this.props.champion.spells[0].image.full} /></div>
              <div className="spellName">{this.props.champion.spells[0].name} </div>
              <div className="spellDesc">{this.props.champion.spells[0].sanitizedDescription}</div>
            </div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/spell/"+ this.props.champion.spells[1].image.full} /> </div>
              <div className="spellName">{this.props.champion.spells[1].name} </div>
              <div className="spellDesc">{this.props.champion.spells[1].sanitizedDescription} </div>
            </div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/spell/"+ this.props.champion.spells[2].image.full} /> </div>
              <div className="spellName">{this.props.champion.spells[2].name} </div>
              <div className="spellDesc">{this.props.champion.spells[2].sanitizedDescription} </div>
            </div>
            <div className="botSpell">
              <div className="spellImage"><img src={"http://ddragon.leagueoflegends.com/cdn/6.17.1/img/spell/"+ this.props.champion.spells[3].image.full} /> </div>
              <div className="spellName">{this.props.champion.spells[3].name} </div>
              <div className="spellDesc">{this.props.champion.spells[3].sanitizedDescription} </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



/*

          */
//splash image <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.champion.key+"_0.jpg"} />