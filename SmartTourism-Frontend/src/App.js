import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter  } from "react-router-dom";

// pages for this kit
import LoginPage from "views/LoginPage.js";
import SignupPage from "views/SignupPage.js";
import Logout from "views/Logout.js";
import Acceuil from "views/Acceuil.js";
import EventsFestivaux from "views/Event_Festivaux";
import Albums from "views/Albums";

import { connect } from 'react-redux';

import { login, signup, logout, postEvent, fetchEvents, showInterest } from './redux/ActionCreators';


const mapStateToProps = state => {
  return {
    userDetails: state.userDetails,
    events: state.events
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (type, username, password, name, description, activityField, birthday, city, country, languages, gender) => dispatch(signup(type, username, password, name, description, activityField, birthday, city, country, languages, gender)),
  login: (username, password, rememberMe) => dispatch(login(username, password, rememberMe)),
  logout: () => dispatch(logout()),
  postEvent: (name, date, localisation, description, isPrivate) => dispatch(postEvent(name, date, localisation, description, isPrivate)),
  fetchEvents: () => dispatch(fetchEvents()),
  showInterest: (eventId, interested) => dispatch(showInterest(eventId, interested))
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

    if(this.authenticated()){
      var role;
      if("age" in this.props.userDetails.user)
        role = "Visitor";
      else
        role = "Sector";

      var userId = this.props.userDetails.user.userId;
    }

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
            <LoginPage login={this.props.login} />
            : <Redirect to="/" />
          }
        </Route>
        <Route path="/logout">
          {
            this.authenticated()?
            <Logout logout={this.props.logout} />
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
            <EventsFestivaux
              events={this.props.events}
              postEvent={this.props.postEvent}
              fetchEvents={this.props.fetchEvents}
              showInterest={this.props.showInterest}
              userRole={role}
              userId={userId} />
            : <Redirect to="/login-page" />
          }
        </Route>
        <Route path="/album">
          <Albums />
        </Route>

        <Redirect to="/acceuil" />
        <Redirect from="/" to="/acceuil" />
      </Switch>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));