import React from "react";
import { Link } from 'react-router-dom';
import "./../../../../assets/css/agency.min.css";
import NavBar from './../../navbar';
import Footer from './../../footer';
import {Image} from 'react-bootstrap';
import competition_hall from "./../../../../assets/img/competition_hall.jpg";


function Competition_hall() {

  return (
    <div className="Competition_hall">
      <NavBar/>
  
		


      <Footer/>

    </div>
  );
}

export default Competition_hall;