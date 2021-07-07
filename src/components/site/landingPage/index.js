import React from "react";
import { Link } from 'react-router-dom';
import "../../../assets/css/agency.min.css";

function LandingPage() {

  return (
    <div className="LandingPage">

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
            </div>
            <div className="intro-heading ">
              IIIDentEx2021
            </div>
            <div className="intro-subheading ">
              International Invention & Innovation In Dentistry Exhibition
            </div>
          </div>
        </div>
      </header>



      <section className="page-section" id="competition">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Participant Booth</h2>
              <h3 className="section-subheading text-muted">
              </h3>

            </div>
          </div>
          <div className="row text-center">

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  {/* <h5 className="card-title text-muted text-uppercase text-center">Inventor/ </h5> */}
                  <h1 className="card-price text-center">Professional Innovator</h1>
                  <hr></hr>
                  <p>Professionals from the relevant industry or staff of higher education institutions including private and public universities including polytechnic, community colleges, SME industries</p>
                  <hr></hr>
                  <p>Registration Fee : RM350</p>
                  <hr></hr>
                  <Link to="/sign_up">
                    <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Register</a></div>
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h1 className="card-price text-center">Young <br></br> Innovator</h1>
                  <hr></hr>
                  <p>Students from all HEI including public and private universities, polytechnic, industrial learning colleges, IKM MARA, and international student participation</p>
                  <br></br>
                  <hr></hr>
                  <p>Registration Fee : RM290</p>
                  <hr></hr>
                  <Link to="/sign_up">
                    <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Register</a></div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h1 className="card-price text-center">Junior <br></br>Innovator</h1>
                  <hr></hr>
                  <p>Schools students (Age 17 and below) from government and private school including MRSM, Vocational Colleges</p>
                  <br></br><br></br>
                  <hr></hr>
                  <p>Registration Fee : RM190</p>
                  <hr></hr>
                  {/* <span className="competition-span"><p>* Early Bird Registration Fee : RM150</p></span>
				<hr></hr> */}
                  <Link to="/sign_up">
                    <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Register</a></div>
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
              <h2 className="section-heading text-uppercase">Sponsor Booth</h2>
              <h3 className="section-subheading text-muted">
              </h3>

            </div>
          </div>
          <div className="row text-center">

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">BRONZE PACKAGE</h5>
                  <h3 className="card-price text-center">RM2000</h3>
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
                    <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Sponsor Now</a></div>
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">SILVER PACKAGE</h5>
                  <h3 className="card-price text-center">RM3000</h3>
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
                    <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Sponsor Now</a></div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">GOLD PACKAGE</h5>
                  <h3 className="card-price text-center">RM4000</h3>
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
                    <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Sponsor Now</a></div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>





      {/* <section className="page-section" id="contact">
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
      </section> */}


    </div>
  );
}

export default LandingPage;
