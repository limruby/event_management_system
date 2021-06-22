import React from 'react';
import {Tab, Nav, Row, Col,Card} from "react-bootstrap";
import {FaCertificate} from 'react-icons/fa';
import {BsPeopleCircle,BsFiles} from "react-icons/bs";

import Account from './account';
import Competitor from './competitor-sec';
import Sponsor from './sponsor-sec';
import './table.css'

function AdminDashboard() {

	function TabTitles(){
		return(   
			<Nav variant="pills" className="flex-column">
			<Nav.Item>
			<Nav.Link eventKey="Account"><BsPeopleCircle size={20}/> Account </Nav.Link>
			</Nav.Item>
			<Nav.Item>
			<Nav.Link eventKey="Competitor"><BsFiles size={20}/> Competitor</Nav.Link>
			</Nav.Item>
			<Nav.Item>
			<Nav.Link eventKey="Sponsor"><FaCertificate size={20}/> Sponsor</Nav.Link>
			</Nav.Item>
			</Nav>
			);

		}


	return (

		<div>
    <div className="welcome-box"><h1>Welcome Admin!</h1></div>
			<div className="wrapper">
				<Tab.Container id="left-tabs-example" defaultActiveKey="Account">
					<Row>
						<Col sm={3} className="sidebar-wrapper">
							{TabTitles()}
						</Col>

						<Col sm={9}>
							<Tab.Content>

								<Tab.Pane eventKey="Account">
									<Card>
										<Card.Body>
											<div className="sec-container">			                   
												<h2> Account </h2>    
												<Account />
											</div> 
										</Card.Body>
									</Card>					
								</Tab.Pane>


								<Tab.Pane eventKey="Competitor">
									<Card>
										<Card.Body>
											<div className="sec-container">			                   
												<h2> Competitor Profile </h2>    
												<Competitor />
											</div> 
										</Card.Body>
									</Card>					
								</Tab.Pane>


								<Tab.Pane eventKey="Sponsor">
									<Card>
										<Card.Body>
											<div className="sec-container">			                   
												<h2> Sponsor Profile</h2>    
												<Sponsor/>
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

