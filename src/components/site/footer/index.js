import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../../assets/css/agency.min.css";


function Footer(){
	return(
	<footer className="footer" >
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-4">
					<span className="copyright">
						Copyright &copy; DInoWex2021 | <a href="https://www.fsktm.edu.my">FSKTM</a> | <a href="https://www.um.edu.my">UM</a>
					</span>
				</div>
				<div className="col-md-4">
					<ul className="list-inline social-buttons">
						<li className="list-inline-item">
						<a href="https://www.twitter.com">
						<i className="fa fa-twitter"></i>
						</a>
						</li>
						<li className="list-inline-item">
						<a href="https://www.facebook.com">
						<i className="fa fa-facebook-f"></i>
						</a>
						</li>
						<li className="list-inline-item">
						<a href="https://www.instagram.com">
						<i className="fa fa-instagram"></i>
						</a>
						</li>
						<li className="list-inline-item">
						<a href="https://www.plus.google.com">
						<i className="fa fa-google-plus"></i>
						</a>
						</li>
						<li className="list-inline-item">
						<a href="https://www.linkedin.com">
						<i className="fa fa-linkedin"></i>
						</a>
						</li>
					</ul>
				</div>
				<div className="col-md-4">
					<ul className="list-inline quicklinks">
						<li className="list-inline-item">
						<a href="#something">Privacy Policy</a>
						</li>
						<a className="white-straight-line">| </a>
						<li className="list-inline-item">
						<a href="#something">Terms of Use</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>

	)
}

export default Footer;