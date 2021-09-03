import React,{useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {isAuth, isAdmin} from './utils/isAuth';

import Landing from './components/site/landingPage';
import SignIn from './components/site/login/login';
import SignUp from './components/site/signUp'
import UserDashboard from './components/site/userDashboard';
import EditUserDetails from './components/site/userDashboard/edit';
import eventLobby from './components/site/eventLobby/eventLobby';
import sponsor_hall from './components/site/eventLobby/sponsor_hall/sponsor_hall';
import sponsor_booth from './components/site/eventLobby/sponsor_hall/sponsor_booth';
import competition_hall from './components/site/eventLobby/competition_hall/competition_hall';
import competition_booth from './components/site/eventLobby/competition_hall/comp_booth'
import report from './components/site/eventLobby/competition_hall/report-sec'
import Navbar from './components/site/navbar';
import Footer from './components/site/footer';
import AdminDashboard from './components/site/adminDashboard';
import AdminEditDetails from './components/site/adminDashboard/edit';
import PageNotFound from './components/PageNotFound.js';
import Pending from './components/site/pending.js';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

require('dotenv').config();

const queryClient = new QueryClient()

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      isAdmin()
        ?  <Component {...props} />     //true
        :  <Redirect to='/page_not_found' />
    )} />
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (

    isAuth() === false
          ? <Redirect to='/sign_in' />
          : <Component {...props} />
  )} />
)

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  return (
    <QueryClientProvider client={queryClient}>
    <Router basename={'/iiidentex_uitm/'}>
    <Navbar isAuth={loggedIn} />
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/sign_in'  component={SignIn}/>
        <Route exact path='/sign_up'  component={SignUp}/>  

        <PrivateRoute exact path='/user_dashboard' component={UserDashboard}/>  
        <PrivateRoute exact path='/user_dashboard/edit_account' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_password' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_profile' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_content' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_researchTeam' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_abstract' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_book_chapter' component={EditUserDetails}/>

        <AdminRoute exact path='/admin_dashboard'  component={AdminDashboard}/>
        <AdminRoute exact path='/admin_dashboard/edit_account'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/:id/assign_project_title'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/:id/edit_password'  component={AdminEditDetails}/> 
        <AdminRoute exact path='/admin_dashboard/:id/edit_profile_sponsor'  component={AdminEditDetails}/> 
        <AdminRoute exact path='/admin_dashboard/:id/edit_profile_competitor'  component={AdminEditDetails}/> 
        <AdminRoute exact path='/admin_dashboard/:id/edit_profile_visitor'  component={AdminEditDetails}/> 
        <AdminRoute exact path='/admin_dashboard/:id/edit_profile_judge'  component={AdminEditDetails}/> 
        <AdminRoute exact path='/admin_dashboard/create_profile'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/insert_evaluation_form_link'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/:id/upload_receipt_competitor'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/:id/upload_receipt_sponsor'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/:id/upload_receipt_visitor'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/:id/edit_order_status'  component={AdminEditDetails}/>

		    <Route exact path='/eventLobby'  component={eventLobby}/>  
        <Route exact path='/sponsor_hall'  component={sponsor_hall}/> 
        <Route exact path='/sponsor_booth/:id'  component={sponsor_booth}/> 
        <Route exact path='/competition_hall'  component={competition_hall}/>
        <Route exact path='/competition_booth/:id'  component={competition_booth}/>
        <Route exact path='/report'  component={report}/>

        <PrivateRoute exact path='/pending'  component={Pending}/>
        <Route component={PageNotFound} />
        
      </Switch>
	  <Footer/>

    </Router>
    </QueryClientProvider>
  );
}

export default App;