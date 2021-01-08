import React from "react";
import { Loading } from 'components/LoadingComponent';

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Button from "reactstrap/lib/Button";

const ShowEvent= (props) =>{
  if (props.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (props.errMess) {
      return(
          <div className="container">
              <div className="row">            
                  <h4>{props.errMess}</h4>
              </div>
          </div>
      );
  }
  else if (props.event != null){
    return (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">{this.props.event.name}</h2>
          </Col>
        </Row>
        <div className="separator separator-primary"></div>
        <div className="section-story-overview">
          <Row>
            <Col md="6">
              <div
                className="image-container image-left"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/images/header1.jpg") + ")",
                }}
              >
                <p className="blockquote blockquote-info">
                  "La joie est une puissance , cultivez le" <br></br>
                  <br></br>
                  <small>-Le dalaï-lama</small>
                </p>
              </div>
            </Col>
            <Col md="5">
              <div
                className="image-container image-right"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/images/bg1.jpg") + ")",
                }}
              ></div>
              <h3>
                Bienvenue le {this.props.event.date} a {this.props.event.localisation}
              </h3>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
                <p>
                  Description de l'évenement
                </p>
                <p>
                {this.props.event.description}
                </p>
                <Button
                          className="btn-round"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="lg"
                        >S'interesse</Button>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
  else
      return(<div></div>)
}

export default ShowEvent;
