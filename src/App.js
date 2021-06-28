import React,{useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {isAuth, isAdmin} from './utils/isAuth'

import Landing from './components/site/landingPage';
import SignIn from './components/site/login/login';
import SignUp from './components/site/signUp'
import UserDashboard from './components/site/userDashboard';
import EditUserDetails from './components/site/userDashboard/edit';
import eventLobby from './components/site/eventLobby/eventLobby';
import sponsor_hall from './components/site/eventLobby/sponsor_hall/sponsor_hall';
import competition_hall from './components/site/eventLobby/competition_hall/competition_hall';
import Navbar from './components/site/navbar';
import Footer from './components/site/footer';
import AdminDashboard from './components/site/adminDashboard';
import AdminEditDetails from './components/site/adminDashboard/edit';
import PageNotFound from './components/PageNotFound.js';


import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

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
    <Router>
    <Navbar isAuth={loggedIn} />
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/sign_in'  component={SignIn}/>
        <Route exact path='/sign_up'  component={SignUp}/>  

        <PrivateRoute exact path='/user_dashboard'  component={UserDashboard}/>  
        <PrivateRoute exact path='/user_dashboard/edit_account' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_password' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_profile' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_content' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_researchTeam' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_abstract' component={EditUserDetails}/>
        <PrivateRoute exact path='/user_dashboard/edit_book_chapter' component={EditUserDetails}/>

        <AdminRoute exact path='/admin_dashboard'  component={AdminDashboard}/>
        <AdminRoute exact path='/admin_dashboard/edit_account'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/:id/edit_password'  component={AdminEditDetails}/> 
        <AdminRoute exact path='/admin_dashboard/:id/edit_profile_sponsor'  component={AdminEditDetails}/> 
        <AdminRoute exact path='/admin_dashboard/:id/edit_profile_competitor'  component={AdminEditDetails}/> 
        <AdminRoute exact path='/admin_dashboard/create_profile'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/:id/upload_receipt_competitor'  component={AdminEditDetails}/>
        <AdminRoute exact path='/admin_dashboard/:id/upload_receipt_sponsor'  component={AdminEditDetails}/>

		    <Route exact path='/eventLobby'  component={eventLobby}/>  
        <Route exact path='/sponsor_hall'  component={sponsor_hall}/> 
        <Route exact path='/competition_hall'  component={competition_hall}/>

        <Route component={PageNotFound} />
      </Switch>
	  <Footer/>
      

    </Router>
    </QueryClientProvider>
  );
}

export default App;