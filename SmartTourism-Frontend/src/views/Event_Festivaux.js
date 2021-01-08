import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ServicesHeader from "components/Headers/ServicesHeader";
import ShowEvent from "components/body/evenementsETfestivaux/ShowEvent";
import AddEvent from "components/body/evenementsETfestivaux/AddEvent";
import NavbarAcceuil from "components/Navbars/NavbarAcceuil";
import ListEvents from "views/ListEvents";
import { connect } from 'react-redux';
import { postEvent, fetchEvents } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
        <ShowEvent event={this.props.events.events.filter((event) => event.id === (match.params.eventId,10))[0]}
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
            <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch location={this.props.location}>
                    <Route
                      path="/events_festivaux/list" component={() => <ListEvents events={this.props.events} />} />
                    <Route path="/events_festivaux/:eventId" component={EventWithId}/>
                    <Route path="/events_festivaux/addEvent"
                      component={(props) => <AddEvent {...props} />} /> 
                    <Redirect from="/events_festivaux/" to="/events_festivaux/list" /> 
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <DefaultFooter />
        </div>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events_Festivaux));
