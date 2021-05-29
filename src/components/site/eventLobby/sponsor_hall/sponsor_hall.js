import React from "react";
import { Link } from 'react-router-dom';
import "./../../../../assets/css/agency.min.css";
import Footer from './../../footer';
import {Image} from 'react-bootstrap';
import sponsor_hall from "./../../../../assets/img/sponsor_hall.jpg";
import featured_sponsor from "./../../../../assets/img/featured_sponsor.jpg";
import './sponsor_hall.css';
import EmblaCarousel from "./EmblaCarousel";


const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Sponsor_hall() {

  return (
    <div className="sponsor_hall">
  
		<div className="sponsorhall-main-container row justify-content-center">
            <div className="sponsorhall-container col-lg-8">
                    <h3 className="sponsor_title"><strong>Featured Sponsor</strong></h3>
					<Image className="featured_sponsor_background" src={featured_sponsor} height="100%" width="100%" alt="" rounded responsive/>

					<div className="featured_sponsor_info responsive">
						<h3 className="featured_sponsor_text">Dinowex Sdn Bhd</h3>
						<button className="btn btn-primary featured_sponsor_about_us">About Us</button>
					</div>
            </div>

        </div>

		<div className="sponsorhall-main-container row justify-content-center">
            <div className="sponsorhall-container col-lg-11">
                    <h3 className="sponsor_title"><strong>Silver</strong></h3>
					<EmblaCarousel className="justify-content-center" slides={slides} />				
            </div>

        </div>

		<div className="sponsorhall-main-container row justify-content-center">
            <div className="sponsorhall-container col-lg-11">
                    <h3 className="sponsor_title"><strong>Bronze</strong></h3>
					<EmblaCarousel slides={slides} />			
            </div>

        </div>
		



    </div>
  );
}

export default Sponsor_hall;
