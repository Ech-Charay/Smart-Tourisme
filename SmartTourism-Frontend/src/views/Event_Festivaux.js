import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ServicesHeader from "components/Headers/ServicesHeader";
import ShowEvent from "components/body/evenementsETfestivaux/ShowEvent";
import AddEvent from "components/body/evenementsETfestivaux/AddEvent";
import NavbarAcceuil from "components/Navbars/NavbarAcceuil";
import ListEvents from "views/ListEvents";
import { connect } from 'react-redux';
import { postEvent, fetchEvents  } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = dispatch => ({
  postEvent: (name, date, localisation, description, isPrivate) => dispatch(postEvent(name, date, localisation, description, isPrivate)),
  fetchEvents: () => dispatch(fetchEvents()),
});

class Events_Festivaux extends Component {
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
                <Switch>
                    <Route 
                    path="/events_festivaux/addEvent" component={() => <AddEvent  postEvent={this.props.postEvent}/>} /> 
                    <Route
                      path="/events_festivaux/list" component={() => <ListEvents events={this.props.events} />} />
                    <Route path="/events_festivaux/:eventId" component={EventWithId}/>
                    <Redirect from="/events_festivaux/" to="/events_festivaux/list" /> 
                </Switch>
                </Switch>
          </div>
          <DefaultFooter />
        </div>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events_Festivaux));
