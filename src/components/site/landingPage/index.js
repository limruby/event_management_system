import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../../assets/img/Dinowex.png";
import "../../../assets/css/agency.min.css";

function LandingPage() {

  return (
    <div className="LandingPage">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <img src={logo} height="50px" width="200px" alt="" />

          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
			
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#competition">
                  Competition
                </a>
              </li>
			  <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#sponsorship">
                  Sponsorship
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
              <span>
                <img src={logo} height="150px" width="350px" alt="" />
              </span>
            </div>
            <div className="intro-heading ">
              DInoWex2021
              <Link to="/sign_up">  
                <button
                  className="btn btn-primary btn-xl text-uppercase js-scroll-trigger customBtn"
                  href="#"
                >
                  Register Now
                </button>
               </Link> 
            </div>
            <div className="intro-subheading ">
              International Digital Innovation in Wellness 2021
            </div>
          </div>
        </div>
      </header>

	 

      <section className="page-section" id="competition">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Competition</h2>
              <h3 className="section-subheading text-muted">
                3 category
				
              </h3>
			 
            </div>
          </div>
          <div className="row text-center">

            <div className="col-lg-4">
			<div className="card mb-5 mb-lg-0">
			<div className="card-body">
				<h5 className="card-title text-muted text-uppercase text-center">Inventor/ Innovator</h5>
				<h1 className="card-price text-center">Professional</h1>
				<hr></hr>
				<p>Professionals from the relevant industry or staff of higher education institutions including private and public universities including polytechnic, community colleges, SME industries</p>
				<hr></hr>
				<p>Registration Fee : RM390</p>
				<hr></hr>
				<span className="competition-span"><p>* Early Bird Registration Fee : RM350</p></span>
				<hr></hr>
        <Link to="/sign_up">
				  <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="">Register</a></div>
			  </Link>
      </div>
			</div>
			</div>
		

            <div className="col-lg-4">
			<div className="card mb-5 mb-lg-0">
			<div className="card-body">
				<h5 className="card-title text-muted text-uppercase text-center">Young Inventor/ Innovator</h5>
				<h1 className="card-price text-center">Higher Institution</h1>
				<hr></hr>
				<p>Students from all HEI including public and private universities, polytechnic, industrial learning colleges, IKM MARA, and international student participation</p>
				<hr></hr>
				<p>Registration Fee : RM290</p>
				<hr></hr>
				<span className="competition-span"><p>* Early Bird Registration Fee : RM250</p></span>
				<hr></hr>
        <Link to="/sign_up">
				  <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="">Register</a></div>
			  </Link>
      </div>
			</div>
			</div>

            <div className="col-lg-4">
			<div className="card mb-5 mb-lg-0">
			<div className="card-body">
				<h5 className="card-title text-muted text-uppercase text-center">Junior Inventor/ Innovator</h5>
				<h1 className="card-price text-center">School Students</h1>
				<hr></hr>
				<p>Schools students (Age 17 and below) from government and private school including MRSM, Vocational Colleges</p>
				<hr></hr>
				<p>Registration Fee : RM190</p>
				<hr></hr>
				<span className="competition-span"><p>* Early Bird Registration Fee : RM150</p></span>
				<hr></hr>
        <Link to="/sign_up">
				  <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="">Register</a></div>
			  </Link>
      </div>
			</div>
			</div>

          </div>
        </div>
      </section>

	  <section className="bg-light page-section" id="sponsorship">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Sponsorship</h2>
              <h3 className="section-subheading text-muted">
                Contact : <a href="mailto:sponsor_dinowex-list@um.edu.my">sponsor_dinowex-list@um.edu.my</a>
				
              </h3>
			 
            </div>
          </div>
          <div className="row text-center">

            <div className="col-lg-4">
			<div className="card mb-5 mb-lg-0">
			<div className="card-body">
				<h5 className="card-title text-muted text-uppercase text-center">BRONZE PACKAGE</h5>
				<h3 className="card-price text-center">RM500 - RM999</h3>
				<hr></hr>
				<span>
				<ul className="fa-ul">
				<li><span className="fa-li"><i className="fa fa-check"></i></span><p>Logo in promotional material</p></li>
				<li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span><p>Materials on event platform</p></li>
				<li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span><p>Personal booth and interaction with participants</p></li>
				</ul>
				</span>
				<hr></hr>
        <Link to="/sign_up">
				  <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="">Sponsor Now</a></div>
			  </Link>
      </div>
			</div>
			</div>
		

            <div className="col-lg-4">
			<div className="card mb-5 mb-lg-0">
			<div className="card-body">
				<h5 className="card-title text-muted text-uppercase text-center">SILVER PACKAGE</h5>
				<h3 className="card-price text-center">RM1000 - RM2999</h3>
				<hr></hr>
				<span>
				<ul className="fa-ul">
				<li><span className="fa-li"><i className="fa fa-check"></i></span><p>Logo in promotional material</p></li>
				<li><span className="fa-li"><i className="fa fa-check"></i></span><p>Materials on event platform</p></li>
				<li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span><p>Personal booth and interaction with participants</p></li>
				</ul>
				</span>
				<hr></hr>
        <Link to="/sign_up">
				  <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="">Sponsor Now</a></div>
			  </Link>
      </div>
			</div>
			</div>

            <div className="col-lg-4">
			<div className="card mb-5 mb-lg-0">
			<div className="card-body">
				<h5 className="card-title text-muted text-uppercase text-center">GOLD PACKAGE</h5>
				<h3 className="card-price text-center">RM3000 and above</h3>
				<hr></hr>
				<span>
				<ul className="fa-ul">
				<li><span className="fa-li"><i className="fa fa-check"></i></span><p>Logo in promotional material</p></li>
				<li><span className="fa-li"><i className="fa fa-check"></i></span><p>Materials on event platform</p></li>
				<li><span className="fa-li"><i className="fa fa-check"></i></span><p>Personal booth and interaction with participants</p></li>
				</ul>
				</span>
				<hr></hr>
        <Link to="/sign_up">
				  <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="">Sponsor Now</a></div>
			  </Link>
      </div>
			</div>
			</div>

          </div>
        </div>
      </section>



      

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Contact : <a href="mailto:dinowex-list@um.edu.my">dinowex-list@um.edu.my</a>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="subject"
                        type="tel"
                        placeholder="Your Subject *"
                        required="required"
                        data-validation-required-message="Please enter your subject."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
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
                <li className="list-inline-item">
                  <a href="#something">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
