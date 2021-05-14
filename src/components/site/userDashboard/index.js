import React from 'react';
import Footer from './../footer';
import {Link} from 'react-router-dom';
import './userDashboard.css';

import Profile from './profile-sec';
import PromoContent from './promo-content-sec';
import CompetitionMaterial from './competition-material-sec'
import Abstract from './abstract-sec'
import BookChapter from './book-chapter-sec'
import ResearchTeam from './research-team-sec';

import PdfAbstract from './pdf-abstract-bookChapter';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Nav, Row, Col,Card} from "react-bootstrap";
import {FaEdit,FaCertificate,FaBook,FaRegBookmark} from 'react-icons/fa';
import {BsPeopleCircle,BsFiles,BsBookHalf} from "react-icons/bs";


function UserDashboard() {

////////////////////get login user info (REPLACE THIS)  /////////////////////
  const user = {

      name: 'testuser',
      email: 'test@gmail.com',
      gender: 'male',
      password: 'Oldpassword',
      confirmPassword: '',
      // role:"Sponsor",
      role:"Competitor",


      

      name:'testLeader',
      ic_passport_selection:'NRIC',
      ic_passport_number: '1111111111',
      affiliation:'tester',
      address: 'no111,jln 111, tmn 1111, 11000 ',
      gender: 'FEMALE',

      members:[
        { 
          name: 'John Doe',
          ic_passport_selection: 'NRIC',
          ic_passport_number: '123123123123'
        }
      ],

      company_name:'UM',
      PIC_name: 'PICUser',
      phone: '011111111111',
      company_address: 'UM, Jln Uni, 560000',
      company_website: 'https://www.youtube.com/',
      company_logo:'https://www.w3schools.com/images/w3schools_green.jpg',


   }

//////////////////////////////////////////////////////////////////////////////////

  function TabTitles(role){
    switch(role){
      case 'Sponsor':
        return (
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Account-Profiles"><BsPeopleCircle size={20}/> Company Profiles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Promo-Content"><BsFiles size={20}/> Promotional Content</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Cert"><FaCertificate size={20}/> Certificate</Nav.Link>
            </Nav.Item>
          </Nav>
        );
      case 'Competitor':
        return (
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Account-Profiles"><BsPeopleCircle size={20}/> Company Profiles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Competition-Material"><BsFiles size={20}/> Competition Material</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Abstract"><FaBook size={20}/> Abstract</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Research-Team"><FaRegBookmark size={20}/> Research Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Cert"><FaCertificate size={20}/> Certificate</Nav.Link>
            </Nav.Item>
          </Nav>
        );
      default:
        return '';
    }
  }


  return (
   <>

   <div className="row-username">
       <p>Welcome {user.name}</p>

   </div>  

   <div className="wrapper">
       <Tab.Container id="left-tabs-example" defaultActiveKey="Account-Profiles">
          <Row>
            <Col sm={3} className="sidebar-wrapper">
               
               {TabTitles(user.role)}
            
            </Col>


            <Col sm={9}>
              <Tab.Content>

                <Tab.Pane eventKey="Account-Profiles">
                
                  <Card>
					<Card.Body>
					<div className="sec-container">
                    <Link to='/user_dashboard/edit_account'>
                      <a className="edit" href=""><FaEdit/> Edit Email</a>
                    </Link>
                    <h2> Account Details</h2>     
                    <ul>
                      <li>
                        <p> Email: {user.email} </p>
                      </li>
                      <li>
                        <Link to='/user_dashboard/edit_password'>
                        <button className="edit-button"><FaEdit/> Edit Password</button>
                        </Link>
                      </li>
                    </ul>
                  </div>
					</Card.Body>
				</Card>

                  <p/>

                  <Card>
					<Card.Body>
                  <div className="sec-container">
                    <Link to='/user_dashboard/edit_profile'>
                      <a className="edit" href="/user_dashboard/edit_profile"><FaEdit/> Edit</a>
                    </Link>
                    <h2> Profile </h2>  
                     <Profile user={user}/>     
                  </div>
				  </Card.Body>
				</Card>

                </Tab.Pane>

                <Tab.Pane eventKey="Promo-Content">
				<Card>
					<Card.Body>
                  <div className="sec-container">
                    <Link to='/user_dashboard/edit_content'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
                    <h2> Promotional Content</h2>     
                    <PromoContent/>
                  </div>  
				</Card.Body>
				</Card>
                </Tab.Pane>

                <Tab.Pane eventKey="Competition-Material">
				<Card>
					<Card.Body>
                  <div className="sec-container">
                    <Link to='/user_dashboard/edit_content'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
                    <h2> Competition Material</h2>     
                    <CompetitionMaterial/>
                  </div>  
				  </Card.Body>
				</Card>
                </Tab.Pane>

                <Tab.Pane eventKey="Abstract">
				<Card>
					<Card.Body>
                  <div className="sec-container">
                   <Link to='/user_dashboard/edit_abstract'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
                    <h2> Abstract </h2>     
                    <Abstract/>
                  </div>
				  </Card.Body>
				</Card>

				<p/>

                  <div className="sec-container">
				  <Card>
					<Card.Body>
                   <Link to='/user_dashboard/edit_book_chapter'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
                    <h2> BookChapter </h2>     
                    <BookChapter/>
					</Card.Body>
				</Card>

				<Card>
					<Card.Body>
                     <PdfAbstract/>
					 </Card.Body>
				</Card>
                  </div>

                </Tab.Pane>

                

                <Tab.Pane eventKey="Research-Team">
				<Card>
					<Card.Body>
                  <div className="sec-container">
                   <Link to='/user_dashboard/edit_researchTeam'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
                    <h2> Research Team</h2>     
                    <ResearchTeam/>
                  </div>  
				  </Card.Body>
				</Card>
                </Tab.Pane>

                <Tab.Pane eventKey="Cert">
				<Card>
					<Card.Body>
                  <div className="sec-container">
                    <h2> Download Certification</h2>     
                    
                    <h5>Coming Soon</h5>
                   
                  </div>  
				</Card.Body>
				</Card>
                </Tab.Pane>

              </Tab.Content>
            </Col>

          </Row>
        </Tab.Container>


 

    </div>
  
    
    <Footer/>
    
  </>
  );

}

export default UserDashboard;