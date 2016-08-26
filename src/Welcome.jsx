import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Welcome extends React.Component {

  onEnterClick(e) {
    e.preventDefault()
    browserHistory.push('/champions/')
  }

  render() {
    return (
      <div className="welcomeBodyStyle">
        <div className="welcomeImage">
          <div className="mainHolder">
            <span className="welcomeTitle">League Champion Cheatsheet</span>
            <div className="buttonPosition"><input type="button" value="Enter" className="buttonStyle" onClick={this.onEnterClick.bind(this)} /></div>
          </div>
        </div>
        <div className="footerInfo">
          <div className="aboutInfo">Want more information about this project? Check my <a href='/About'>About page</a></div>
          <div className="riotInfo">This site is not endorsed, certified or otherwise approved in any way by Riot Games, Inc. or any of its affiliates.</div>
        </div>
      </div>
    )
  }
}