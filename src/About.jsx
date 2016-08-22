import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Champion extends React.Component {
  render() {
    return (
      <div className="aboutBackdrop">
        <div className="aboutMain">
          <div className="aboutTitle">ABOUT</div>
          <div className="aboutHeader">Project</div>
          <p className="aboutBody">This project is a culmination of skills learned through a three month long course with The Iron Yard, for learning front-end development.  Though this doesn’t fully show every thing learned, as some of what we learned transcends the medium of a website, this is to show what I had a vision for with a newly learned set of skills.
          Many people would be rightly justified to ask “Why would you bother remaking a site that already exists?”. One of the reasons why I chose to do this was because to my understanding, every once in a while a project given at a job might not be creating a whole new application or site on it’s own, but to redesign and re-do something that already exists to give it lively update.
          Though Riot Games does an amazing job and has a top notch design team, I felt like there were a few too many steps and irrelevant information clogging up the layout of the important information.  The information displayed on this site and more specifically on a particular character is for a quick reference guide for either new players that have no idea what they are going up against. Also can be used for experienced players that can’t quite remember or haven’t played the game in a long time. 
          </p>
          <div className="aboutHeader">Me</div>
          <p className="aboutBody">My name is Alec Bridge, I am currently 24, an avid gamer since I can remember and lover of everything internet related.  I had been working previously at a call center in Spicer, Minnesota (my hometown) for the past couple years taking calls for multiple companies (American Musical Supply, Seeds of Change, Fahrney’s Pens) and in that time there I spent a lot of time jumping between their many different pages looking things up for customers. 
          I attribute my pursuit to learn coding to that job, since I spent some of my time encountering bugs and reporting them to the teams that created the sites and other times navigating to competitor sites that were just flat out a mess.  With encouragement and support from my oldest brother Ryan who works as a developer himself and a few friends I’ve gamed with for years I finally decided “I feel like this is something I could really get into and achieve a rewarding career I’ve been longing for.”. 
          So a couple months before class was set to start I packed it all up and moved to the cities (currently Shakopee, MN) and started the preparation for the course ahead.  Starting an intensive course with Zero experience in coding was a bit intimidating but to come out having learned so much I am grateful.  Even more so looking forward to keep learning as the scene evolves and technology changes.
          </p>
          <div className="aboutHeader">League of Legends</div>
          <p className="aboutBody">If you are unfamiliar or don’t know what League of Legends is, feel free to read more about it <a href="http://gameinfo.na.leagueoflegends.com/en/game-info/get-started/what-is-lol/">here</a>.
          <p>Reminder This site is not endorsed, certified or otherwise approved in any way by Riot Games, Inc. or any of its affiliates.</p>
          </p>
          <div className="aboutHeader">Resources</div>
          <ul className="aboutBodyBottom">
            <li><a href="https://github.com/alecbridge" className="linksStyle">GitHub Profile</a></li>
            <li><a href="https://github.com/alecbridge/finalProj" className="linksStyle">This Project's Repo</a></li>
            <li><a href="https://www.linkedin.com/in/alec-bridge-b9a500126?trk=nav_responsive_tab_profile_pic" className="linksStyle">LinkedIn</a></li>
            <li><a href="https://twitter.com/AlecBridge" className="linksStyle">Twitter</a></li>
            <li><a href="http://na.leagueoflegends.com/" className="linksStyle">League of Legends</a></li>
          </ul>
        </div>
      </div>
    )
  }
}