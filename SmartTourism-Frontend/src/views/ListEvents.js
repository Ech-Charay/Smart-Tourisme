import React from "react";
import { Container ,Row, Button } from 'reactstrap';
import { Link } from "react-router-dom";

import EventItem from "components/body/evenementsETfestivaux/EventItem";
import { Loading } from 'components/LoadingComponent';

const ListEvents = (props) => {
    const isUserInterested = (event) => {
      if(event.guests === null)
        return false;
      for(let i = 0 ; i < event.guests.length ; i++)
        if(event.guests[i].userId === props.userId)
          return true;
      return false;
    }
    const list = props.events.events.map((event) => {
      return(
        <div className="col-12 col-md-4" key={event.id}>
          <EventItem
            event={event}
            showInterest={props.showInterest}
            userRole={props.userRole}
            userId={props.userId}
            isUserInterested={isUserInterested(event)} />
        </div>
      )
    });
    if (props.events.isLoading) {
      return(
        <div className="container">
          <div className="row">            
            <Loading />
          </div>
        </div>
      );
    }
    else if (props.events.errMess) {
      return(
        <div className="container">
            <div className="row"> 
              <div className="col-12">
                <h4>{props.events.errMess}</h4>
              </div>
            </div>
        </div>
      );
    }
    else{
      return (
          <Container>
            <h2 className="title">Liste des évenements ou festivaux</h2>
            <br></br>
            <Row>{list}</Row>
            {
              props.userRole === "Sector" ?
              <div className="col text-center">
                <Button
                  className="btn-round btn-white"
                  color="default"
                  to="/events_festivaux/addEvent"
                  outline
                  size="lg"
                  tag={Link}
                >
                  Créer un Evénement
                </Button>
              </div>
              : <> </>
            }
          </Container>
      );
    }
  }     

export default ListEvents;