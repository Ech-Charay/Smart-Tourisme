import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Container,
  Row,
} from "reactstrap";

// core components
import TransparentFooter from "components/Footers/TransparentFooter.js";
import VisitorForm from "components/registrationComponents/VisitorForm.js";
import SectorForm from "components/registrationComponents/SectorForm.js";

class SignupPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      visitorRegistrationFormStatus: true,
      login: "",
      password: "",
      name: "",
      birthday: null,
      country: "",
      city: "",
      languages: "",
      gender: "",
      description: "",
      activityField: "",
      type: "Visitor"
    };

    this.handleChange = this.handleChange.bind(this);

    this.visitorClicked = this.visitorClicked.bind(this);
    this.sectorClicked = this.sectorClicked.bind(this);

    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(event){
    if(moment.isMoment(event))
      this.setState({...this.state, birthday: event });
    else
      this.setState({...this.state, [event.target.name]: event.target.value });
  };

  visitorClicked(e) {
    if(this.state.visitorRegistrationFormStatus === false){
      this.setState({...this.state, type: "Visitor", visitorRegistrationFormStatus: true});
    }
    e.preventDefault();
  }

  sectorClicked(e) {
    if(this.state.visitorRegistrationFormStatus === true){
      this.setState({...this.state, type: "Sector", visitorRegistrationFormStatus: false});
    }
    e.preventDefault();
  }

  formSubmit(event){
    this.props.signup(this.state.type, this.state.login, this.state.password, this.state.name, this.state.description, this.state.activityField, this.state.birthday, this.state.city, this.state.country, this.state.languages, this.state.gender);
    event.preventDefault();
  }

  render(){
    return (
      <React.Fragment>
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="section section-signup"
            style={{
              backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              minHeight: "700px",
            }}
          >
            <Container>
              <Row>
                <Card className="card-signup" data-background-color="blue">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <CardTitle className="title-up" tag="h3">
                        S'inscrir
                      </CardTitle>
                      <div className="social-line">
                        <Button
                          className="btn-neutral btn-icon btn-round"
                          color="facebook"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-facebook-square"></i>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon btn-round"
                          color="twitter"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="lg"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon btn-round"
                          color="google"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-google-plus"></i>
                        </Button>
                      </div>
                      <div className="nav-buttons">
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick={this.visitorClicked}
                          id="visitorBtn"
                          outline
                        >
                          <i className="now-ui-icons users_single-02" /> Visitor
                        </Button>
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick={this.sectorClicked}
                          id="sectorBtn"
                          outline
                        >
                          <i className="now-ui-icons business_bank" /> Sector
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody>
                      {
                        this.state.visitorRegistrationFormStatus ?
                        <VisitorForm handleChange={this.handleChange} />
                        :
                        <SectorForm handleChange={this.handleChange} />
                      }
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-neutral btn-round"
                        color="info"
                        onClick={this.formSubmit}
                        size="lg"
                      >
                        S'inscrir
                      </Button>
                    </CardFooter>
                  </Form>
                </Card>
              </Row>
              <div className="col text-center">
                <Button
                  className="btn-round btn-white"
                  color="default"
                  to="/login-page"
                  outline
                  size="lg"
                  tag={Link}
                >
                  Voir la Page de Login
                </Button>
              </div>
            </Container>
          </div>
          <TransparentFooter />
        </div>
      </React.Fragment>
    );
  }

}

export default SignupPage;
