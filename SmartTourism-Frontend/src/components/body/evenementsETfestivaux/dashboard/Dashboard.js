import React, { Component } from "react";
// reactstrap components
import {Container, Row} from "reactstrap";
import CardAgeDestribution from "./cards/CardAgeDestribution";
import CardGender from "./cards/CardGender";
import CardLangues from "./cards/CardLangues";
import CardNombreVisiteur from "./cards/CardNombreVisiteur";

class Dashboard extends Component {
    constructor(props){
      super(props);

      this.state={
        
      }
    }

  render(){
    
    return (
      <Container>
        <h2 className="title">Dashboard</h2>
        <Row> 
            <div className="col-12 col-md-6">
                <CardAgeDestribution guests={this.props.guests}/>
            </div>
            <div className="col-12 col-md-6">
                <CardNombreVisiteur guests={this.props.guests}/>
            </div>
        </Row>
        <br></br>
        <Row> 
            <div className="col-12 col-md-6">
                <CardLangues guests={this.props.guests}/>
            </div>
            <div className="col-12 col-md-6">
                <CardGender guests={this.props.guests}/>
            </div>
        </Row>
      </Container>
);
  }
  
}

export default Dashboard;
