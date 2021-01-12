import React, { Component } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Label,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstFocus: false,
      lastFocus: false,
      login: "",
      password: "",
      rememberMe: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(event){
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({...this.state, [input.name]: value });
  }

  formSubmit(event){
    event.preventDefault();
    this.props.login(this.state.login, this.state.password, this.state.rememberMe);
  }

  render(){
    return (
      <React.Fragment>
        <ExamplesNavbar />
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
            }}
          ></div>
          <div className="content">
            <Container>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div className="logo-container">
                        <img
                          alt="..."
                          src={require("assets/img/now-logo.png")}
                        ></img>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (this.state.firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Login..."
                          type="text"
                          autoComplete=""
                          name="login"
                          onFocus={() => this.setState({...this.state, firstFocus: true})}
                          onBlur={() => this.setState({...this.state, firstFocus: false})}
                          onChange={this.handleChange}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (this.state.lastFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Mot de passe..."
                          type="password"
                          autoComplete=""
                          name="password"
                          onFocus={() => this.setState({...this.state, lastFocus: true})}
                          onBlur={() => this.setState({...this.state, lastFocus: false})}
                          onChange={this.handleChange}
                        ></Input>
                      </InputGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            defaultValue=""
                            type="checkbox"
                            name="rememberMe"
                            onChange={this.handleChange}
                          ></Input>
                          Se souvenir de moi
                          <span className="form-check-sign">
                            <span className="check"></span>
                          </span>
                        </Label>
                      </FormGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        onClick={this.formSubmit}
                        size="lg"
                      >
                        Se connecter
                      </Button>
                      <div className="pull-left">
                        <h6>
                          <a
                            className="link"
                            href="/signup-page"
                          >
                            Créer un Compte
                          </a>
                        </h6>
                      </div>
                      <div className="pull-right">
                        <h6>
                          <a
                            className="link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Besoin d'Aide?
                          </a>
                        </h6>
                      </div>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
          <TransparentFooter />
        </div>
      </React.Fragment>
    );
  }
  
}

export default LoginPage;
