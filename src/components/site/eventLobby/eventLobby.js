import React,{useState, useEffect} from "react";
import { useHistory,Link } from 'react-router-dom';
import "../../../assets/css/agency.min.css";
import Footer from './../footer';
import './eventLobby.css';
import sponsor_hall from "../../../assets/img/sponsor_hall.jpg";
import competition_hall from "../../../assets/img/competition_hall.jpg";
import {Image} from 'react-bootstrap';




function EventLobby() {
const history = useHistory();
  return (
    <div className="eventLobby">
  
  
		<div className="eventLobby-main-container row justify-content-center">
            <div onClick={()=> history.push("/sponsor_hall")} className="eventLobby-container col-lg-4 zoom">
					<Image src={sponsor_hall} height="100%" width="100%" alt="" rounded responsive/>
					<p/>
                    <h3>Sponsor Hall</h3>
            </div>

			<div onClick={()=> history.push("/competition_hall")} className="eventLobby-container col-lg-4 zoom">
					<Image src={competition_hall} height="100%" width="100%" alt="" rounded responsive/>
					<p/>
                    <h3>Competition Hall</h3>     
            </div>

        </div>



    </div>
  );
}

export default EventLobby;