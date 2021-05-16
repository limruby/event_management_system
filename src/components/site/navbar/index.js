import React,{useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import logo from "../../../assets/img/Dinowex.png";
 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as LinkS} from 'react-scroll';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {isAuth} from '../../../utils/isAuth'
 
const Navigationbar = props => {
   
   const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
 
 
  const handleClick = () => setClick(!click);
 
  const closeMobileMenu = () => setClick(false);
 
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else {
      setButton(true)
    }
  }
 
useEffect( () =>{
  showButton();
}, []);
const history = useHistory();
const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
 
const logout=()=>{
        localStorage.clear();
        window.location.href = '/';
};
 
window.addEventListener('resize', showButton);
 
 
   if (isAuth() === true) {
  return (
 
    <IconContext.Provider value={{color:'#000'}}>
 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"> <Link to='home_section_id' className="navbar-logo" onClick={closeMobileMenu}>
           <img src={logo} height="50px" width="200px" alt="" />
        </Link></Navbar.Brand>
      <Nav className="ml-auto">    
           
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes />  : <FaBars/>}
        </div>
 
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Nav.Link href="/">Home</Nav.Link>
          </li>
          <li className="nav-item">
              <NavDropdown title="Event Lobby" id="basic-nav-dropdown" onToggle={() => { window.location.href = '/eventLobby'}}
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}>
                <NavDropdown.Item href="/sponsor_hall" >Sponsor Hall</NavDropdown.Item>
                <NavDropdown.Item href="/competition_hall">Competition Hall</NavDropdown.Item>
              </NavDropdown>
          </li>
          <li className="nav-item">
            <Nav.Link href="/user_dashboard">UserDashboard</Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link onClick={logout}>Log Out</Nav.Link>
          </li>
        </ul>
     
      </Nav>
    </Navbar>
        </IconContext.Provider>  
 
  );
  }else{
        return(
       
  <IconContext.Provider value={{color:'#000'}}>
 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"> <Link to='#' className="navbar-logo" onClick={closeMobileMenu}>
           <img src={logo} height="50px" width="200px" alt="" />
        </Link></Navbar.Brand>
      <Nav className="ml-auto">    
           
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes />  : <FaBars/>}
        </div>
 
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Nav.Link href="/">Home</Nav.Link>
          </li>
          <li className="nav-item">
              <NavDropdown title="Event Lobby" id="basic-nav-dropdown" onToggle={() => { window.location.href = '/eventLobby'}}
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}>
                <NavDropdown.Item href="/sponsor_hall" >Sponsor Hall</NavDropdown.Item>
                <NavDropdown.Item href="/competition_hall">Competition Hall</NavDropdown.Item>
              </NavDropdown>
          </li>
          <li className="nav-item">
            <Nav.Link href="/sign_up">Registration</Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link href="/sign_in">Sign In</Nav.Link>
          </li>
        </ul>
     
      </Nav>
    </Navbar>
        </IconContext.Provider>  
  );
  }
 
  };
 
 
  export default Navigationbar;