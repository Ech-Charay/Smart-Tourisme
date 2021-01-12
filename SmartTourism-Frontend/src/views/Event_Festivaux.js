import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import DefaultFooter from "components/Footers/DefaultFooter.js";
import ServicesHeader from "components/Headers/ServicesHeader";
import ShowEvent from "components/body/evenementsETfestivaux/ShowEvent";
import AddEvent from "components/body/evenementsETfestivaux/AddEvent";
import NavbarAcceuil from "components/Navbars/NavbarAcceuil";
import ListEvents from "views/ListEvents";

class EventsFestivaux extends Component {
  constructor(props){
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  onEventSelect(eventId) {
    this.setState({ selectedEvent: eventId});
  }

  render(){
    const EventWithId = ({match}) => {
      return(
        <ShowEvent event={this.props.events.events.filter((event) => event.id === (match.params.eventId ))[0]}
          isLoading={this.props.events.isLoading}
          errMess={this.props.events.errMess}
        />
      );
    };
    return (
      <>
        <NavbarAcceuil />
        <div className="wrapper">
          <ServicesHeader title="Evénements et Festivaux." />
          <div className="section section-contact-us text-center">
            <Switch>
              <Route path="/events_festivaux/addEvent">
                {
                  this.props.userRole === "Sector" ?
                  <AddEvent  postEvent={this.props.postEvent} />
                  : <Redirect to="/events_festivaux/" />
                }
              </Route> 
              <Route path="/events_festivaux/list">
                <ListEvents
                  showInterest={this.props.showInterest}
                  events={this.props.events}
                  userRole={this.props.userRole}
                  userId={this.props.userId} />
              </Route>
              <Route path="/events_festivaux/:eventId" component={EventWithId}/>
              <Redirect from="/events_festivaux/" to="/events_festivaux/list" /> 
            </Switch>
          </div>
          <DefaultFooter />
        </div>
      </>
    );
  }
}

export default withRouter(EventsFestivaux);
