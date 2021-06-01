import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../utils/axiosConfig.js';
import {Tab, Nav, Row, Col,Card} from "react-bootstrap";
import {FaEdit,FaCertificate,FaBook,FaRegBookmark} from 'react-icons/fa';
import {BsPeopleCircle,BsFiles,BsBookHalf} from "react-icons/bs";

import Account from './account';
import Admin from './admin-sec';
import Competitor from './competitor-sec';
import Sponsor from './sponsor-sec';
import './table.css'
 
function AdminDashboard() {
 
function TabTitles(){
	return(   
	  <Nav variant="pills" className="flex-column">
	    <Nav.Item>
	      <Nav.Link eventKey="Admin"><BsPeopleCircle size={20}/> Admin </Nav.Link>
	    </Nav.Item>
	    <Nav.Item>
	      <Nav.Link eventKey="Competitor"><BsFiles size={20}/> Competitor</Nav.Link>
	    </Nav.Item>
	    <Nav.Item>
	      <Nav.Link eventKey="Sponsor"><FaCertificate size={20}/>Sponsor</Nav.Link>
	    </Nav.Item>
	  </Nav>
	  );
    
  }
  
 
  return (
  
     
    <div>
      
      <div className="wrapper">
       <Tab.Container id="left-tabs-example" defaultActiveKey="Admin">
          <Row>
            <Col sm={3} className="sidebar-wrapper">
               
               {TabTitles()}
           
            </Col>
 
 
            <Col sm={9}>
              <Tab.Content>
 
            
                <Tab.Pane eventKey="Admin">
					<Card>
						<Card.Body>
			                  <div className="sec-container">			                   
			                    <h2> Admin </h2>    
			                    <Admin />
			                  </div> 
						</Card.Body>
			        </Card>					
                </Tab.Pane>

                <Tab.Pane eventKey="Competitor">
					<Card>
						<Card.Body>
			                  <div className="sec-container">			                   
			                    <h2> Competitor </h2>    
			                  
			                  </div> 
						</Card.Body>
			        </Card>					
                </Tab.Pane>

                <Tab.Pane eventKey="Sponsor">
					<Card>
						<Card.Body>
			                  <div className="sec-container">			                   
			                    <h2> Sponsor </h2>    
			                    
			                  </div> 
						</Card.Body>
			        </Card>					
                </Tab.Pane>
			 
			               
			 
			 
              </Tab.Content>
            </Col>
 
          </Row>
        </Tab.Container>
 
    </div>

</div>  
 
  );
 
}
 
export default AdminDashboard;