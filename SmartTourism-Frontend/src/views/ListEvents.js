import React from "react";
import EventItem from "components/body/evenementsETfestivaux/EventItem";
import { Container ,Row} from 'reactstrap';
import { Loading } from 'components/LoadingComponent';

const ListEvents = (props) => {
    const list = props.events.events.map((event) => {
      return(
        <div className="col-12 col-md-4">
          <EventItem event={event} />
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
          </Container>
      );
    }
  }     

export default ListEvents;