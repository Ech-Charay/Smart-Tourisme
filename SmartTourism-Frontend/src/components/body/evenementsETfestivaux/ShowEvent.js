import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Button from "reactstrap/lib/Button";

function ShowEvent() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <Container>
    <Row>
      <Col className="ml-auto mr-auto text-center" md="8">
        <h2 className="title">Nom de l'evenement</h2>
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
            Bienvenue le 'date de Event' a 'lieu de Event'
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
            For a start, it does not automatically follow that a record
            amount of ice will melt this summer. More important for
            determining the size of the annual thaw is the state of the
            weather as the midnight sun approaches and temperatures
            rise. But over the more than 30 years of satellite records,
            scientists have observed a clear pattern of decline,
            decade-by-decade.
          </p>
          <p>
            The Arctic Ocean freezes every winter and much of the
            sea-ice then thaws every summer, and that process will
            continue whatever happens with climate change. Even if the
            Arctic continues to be one of the fastest-warming regions of
            the world, it will always be plunged into bitterly cold
            polar dark every winter. And year-by-year, for all kinds of
            natural reasons, there’s huge variety of the state of the
            ice.
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

export default ShowEvent;
