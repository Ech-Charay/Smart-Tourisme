import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter  } from "react-router-dom";

// pages for this kit
import LoginPage from "views/LoginPage.js";
import SignupPage from "views/SignupPage.js";
import Acceuil from "views/Acceuil.js";
import EventsFestivaux from "views/Event_Festivaux";
import { connect } from 'react-redux';

import { login, signup  } from './redux/ActionCreators';


const mapStateToProps = state => {
  return {
    userDetails: state.userDetails
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (type, username, password, name, description, activityField, birthday, city, country, languages, gender) => dispatch(signup(type, username, password, name, description, activityField, birthday, city, country, languages, gender)),
  login: (username, password, rememberMe) => dispatch(login(username, password, rememberMe)),
});

class App extends Component {

  constructor(props){
    super(props);

    this.authenticated = this.authenticated.bind(this);
  }

  authenticated(){
    return this.props.userDetails.authenticated;
  }

  render(){
    return (      
      <Switch>
        <Route path="/signup-page">
          {
            !this.authenticated()?
            <SignupPage signup={this.props.signup} />
            : <Redirect to="/" />
          }
        </Route>
        <Route path="/login-page">
          {
            !this.authenticated()?
            <LoginPage login={this.props.login} authenticated={this.authenticated}/>
            : <Redirect to="/" />
          }
        </Route>
        <Route path="/acceuil">
          {
            this.authenticated()?
            <Acceuil />
            : <Redirect to="/login-page" />
          }
        </Route>
        <Route path="/events_festivaux">
          {
            this.authenticated()?
            <EventsFestivaux />
            : <Redirect to="/login-page" />
          }
        </Route>

        <Redirect to="/acceuil" />
        <Redirect from="/" to="/acceuil" />
      </Switch>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));