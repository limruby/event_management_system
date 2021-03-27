import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/site/landingPage';
import SignUp from './components/site/login/sign_up';
import Login from './components/site/login/login';
import ProfileForm from './components/site/profileForm'

//test to be delete
import testsignup from './components/site/login/testsignup';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/sign_up' component={SignUp}/>     
        <Route exact path='/login'  component={Login}/>
        <Route exact path='/profile_form'  component={ProfileForm}/>




        <Route exact path='/testsignup' component={testsignup}/>     


      </Switch>

      

    </Router>
    </QueryClientProvider>
  );
}

export default App;

