import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import logo from "../../../assets/img/IIIDentEx2021 Logo-white-01.webp";
import "../../../assets/css/agency.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { isAuth, isAdmin } from '../../../utils/isAuth'
require('dotenv').config();
const Navigationbar = props => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, []);
  const history = useHistory();
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  window.addEventListener('resize', showButton);

  if (isAdmin() === true) {
    return (

      <IconContext.Provider value={{ color: '#000' }}>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"> <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} height="50px" width="200px" alt="" />
          </Link></Navbar.Brand>
          <Nav className="ml-auto">

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to ='/'>Home</Link>
              </li>
              {/* <li className="nav-item">
                <NavDropdown title="Event Lobby" id="basic-nav-dropdown" onToggle={() => { window.location.href = '/eventLobby'}}
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}>
                  <NavDropdown.Item href="/sponsor_hall" >Sponsor Hall</NavDropdown.Item>
                  <NavDropdown.Item href="/competition_hall">Competition Hall</NavDropdown.Item>
                </NavDropdown>
            </li> */}
              <li className="nav-item">
                <Link to ='/admin_dashboard'>AdminDashboard</Link>
              </li>
              <li className="nav-item">
                <Nav.Link onClick={logout}>Log Out</Nav.Link>
              </li>
            </ul>

          </Nav>
        </Navbar>
      </IconContext.Provider>

    );

  }

  else if (isAuth() === true) {
    return (

      <IconContext.Provider value={{ color: '#000' }}>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"> <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} height="50px" width="200px" alt="" />
          </Link></Navbar.Brand>
          <Nav className="ml-auto">

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/'>Home</Link>
              </li>
              {/* <li className="nav-item">
                <NavDropdown title="Event Lobby" id="basic-nav-dropdown" onToggle={() => { window.location.href = '/eventLobby'}}
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}>
                  <NavDropdown.Item href="/sponsor_hall" >Sponsor Hall</NavDropdown.Item>
                  <NavDropdown.Item href="/competition_hall">Competition Hall</NavDropdown.Item>
                </NavDropdown>
            </li> */}
              <li className="nav-item">
                <Link to ='user_dashboard'>UserDashboard</Link>
              </li>
              <li className="nav-item">
                <Nav.Link onClick={logout}>Log Out</Nav.Link>
              </li>
            </ul>

          </Nav>
        </Navbar>
      </IconContext.Provider>

    );
  }

  else {
    return (

      <IconContext.Provider value={{ color: '#000' }}>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"> <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} height="50px" width="200px" alt="" />
          </Link></Navbar.Brand>
          <Nav className="ml-auto">

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to ="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <NavDropdown title="Event Lobby" id="basic-nav-dropdown" onToggle={() => { window.location.href = '/eventLobby'}}
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}>
                  <NavDropdown.Item href="/sponsor_hall" >Sponsor Hall</NavDropdown.Item>
                  <NavDropdown.Item href="/competition_hall">Competition Hall</NavDropdown.Item>
                </NavDropdown>
            </li> */}
              <li className="nav-item">
              <Link to ='/sign_up'>Registration</Link>
              </li>
              <li className="nav-item">
              <Link to ='/sign_in'>Sign In</Link>
              </li>
            </ul>

          </Nav>
        </Navbar>
      </IconContext.Provider>
    );
  }

};

export default Navigationbar;