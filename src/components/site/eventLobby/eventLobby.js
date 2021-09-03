import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import "../../../assets/css/agency.min.css";
import './eventLobby.css';
import dinowex from "../../../assets/img/Dinowex.png";
import iiidentex from "../../../assets/img/IIIDentEx2021 Logo-white-01.webp";
import eventlobby from "../../../assets/img/event-lobby.png";
import { Image } from 'react-bootstrap';

function EventLobby() {

  const history = useHistory();
  return (
    <div className="eventLobby">
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
            </div>
            <div className="row">
              <div className="intro-heading col-lg-6">
                Event Lobby
              </div>
              <div className="col-lg-3 justify-content-center">
                <Image src={dinowex} height="auto" width="100%" alt="" rounded responsive />
              </div>
              <div className="col-lg-3 justify-content-center">
                <Image className="row" src={iiidentex} height="auto" width="100%" alt="" rounded responsive />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div className="img-container">
        <div className="sponsors-dropdown sponsors-hall">
          SPONSORS HALL<span className="sponsors-arrow"></span>
            <div className="sponsors-dropdown-content">            
                <a href="/sponsor_hall">DINOWEX</a><span className="sponsors-dropdown-arrow"></span>
                <a href="/iiidentex_uitm/sponsor_hall">IIIDENTEX</a><span className="sponsors-dropdown-arrow"></span>             
            </div>
        </div>
        
            <div className="speakers-dropdown speakers">
            <span className="speakers-arrow"></span>SPEAKERS
            <div className="speakers-dropdown-content">

                {/* <span className="speakers-dropdown-arrow"></span>DINOWEX */}
                <span className="speakers-dropdown-arrow"></span>N/A

            </div>
            </div>

            <div className="competitors-dropdown competitors-hall">
                COMPETITORS HALL<span className="competitors-arrow"></span>
                <div className="competitors-dropdown-content">
              
                <a href="/competition_hall">DINOWEX</a><span className="competitors-dropdown-arrow"></span>
                <a href="/iiidentex_uitm/competition_hall">IIIDENTEX</a><span className="competitors-dropdown-arrow"></span>
              
                </div>
            </div>
            <div className="youtube-dropdown youtube-event">
            <span className="youtube-event-arrow"></span>YOUTUBE - EVENT
            <div className="youtube-dropdown-content">
                {/* <span className="youtube-dropdown-arrow"></span>DINOWEX */}
                <span className="youtube-dropdown-arrow"></span>N/A
            </div>
            </div>           
            <Image src={eventlobby} height="100%" width="100%" alt="" responsive />
        </div>
      </div>
    </div>
  );
}
export default EventLobby;