import React from 'react';
import "../../../assets/css/agency.min.css";


function Footer() {
	return (
		<footer className="footer" >
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-4">
						<span className="copyright">
							©  IIIDentEx2021 by Faculty of Dentistry
						</span>
					</div>
					<div className="col-md-4">
					</div>
					<div className="col-md-4">
						<ul className="list-inline quicklinks social-buttons">
							<li className="list-inline-item">
								<a href="https://www.facebook.com/iiidentex2021">
									<i className="fa fa-facebook-f"></i>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="https://www.instagram.com/iiidentex2021">
									<i className="fa fa-instagram"></i>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="mailto: iiidentex@gmail.com">
									<i className="fa fa-envelope"></i>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="tel:+603-6126 6284">
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