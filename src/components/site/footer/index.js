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
					
				</div>

				<div className="col-md-4">
					<ul className="list-inline quicklinks social-buttons">
						<li className="list-inline-item">
						<a href="https://www.facebook.com/DInoWex.FSKTM">
						<i className="fa fa-facebook-f"></i>
						</a>
						</li>
						<li className="list-inline-item">
						<a href="https://www.instagram.com/dinowexofficial/">
						<i className="fa fa-instagram"></i>
						</a>
						</li>
						<li className="list-inline-item">
						<a href = "mailto: dinowex-list@um.edu.my">
						<i className="fa fa-envelope"></i>
						</a>
						</li>
						<li className="list-inline-item">
						<a href="tel:+603-7967 6313">
						<i className="fa fa-phone"></i>
						</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>

	)
}

export default Footer;