import React, { Component } from "react";

// core components
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ServicesHeader from "components/Headers/ServicesHeader";
import ShowEvent from "components/body/evenementsETfestivaux/ShowEvent";
import { Container ,Row} from 'reactstrap';
import image from "assets/img/event.jpg";
import EventItem from "components/body/evenementsETfestivaux/EventItem";
import NavbarAcceuil from "components/Navbars/NavbarAcceuil";

class ListEvents extends Component {
  
  constructor(props)
  {
    super(props);
    this.state={
      item :
            {
                imag : image,
                title : "Festival Hoceima",
                place:"Al Hoceima",
                date :"01/02/2020"
            }
    }
  }
  render()
  {
    return (
      <>
        <NavbarAcceuil />
        <div className="wrapper">
          <ServicesHeader title="Evénements et Festivaux." />
          <div className="section section-contact-us">
            <Container>
              <h2>Liste des évènements : </h2>
              <br></br>
              <Row>
                <EventItem item={this.state.item} />
                <EventItem item={this.state.item} />
                <EventItem item={this.state.item} />

              </Row>
  
            </Container>
          </div>
          <DefaultFooter />
        </div>
      </>
    );
  }
 
}

export default ListEvents;
