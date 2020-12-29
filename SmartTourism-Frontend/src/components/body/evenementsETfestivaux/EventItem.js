import React, { Component } from "react";
import { Link } from "react-router-dom";

import {  Button, Container ,Card ,CardBody , CardText ,CardTitle ,CardImg,CardSubtitle} from 'reactstrap';


class EventItem extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            interested: "s'intéresser",
            checked: ""
            
        }
        this.interested = this.interested.bind(this);
    }

    interested() {
        const txt = this.state.interested;

        if (txt === "s'intéresser") {
            this.setState({
                interested: "intéressé",
                checked: "fa fa-check ml-2"
            })
        }
        if (txt === "intéressé") {
            this.setState({ interested: "s'intéresser", checked: "" })

        }
    }


    render() {
        return (

            <div className="col-md-4 col-12">
            

                <Card>
                    <CardImg top src={this.props.item.imag} style={{width:'400px' , height:"400px"}}/>
                    <CardBody>
                        <CardTitle tag="h5">{this.props.item.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.item.place}</CardSubtitle>
                        <CardText>{this.props.item.date}</CardText>
                        <Button color="info" type="button" size="sm" onClick={this.interested}  > {this.state.interested}<i className={this.state.checked}></i></Button>
                        <Button color="info" type="button" size="sm"><Link to="/events_festivaux/showEvent" style={{ color: "white" }}>Details ..</Link></Button>

                    </CardBody>
                </Card>
            </div>


        );
    }
}

export default EventItem;