import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "assets/img/event.jpg";

import {  Button,Card ,CardBody , CardText ,CardTitle ,CardImg,CardSubtitle} from 'reactstrap';


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
            <Card>
                <Link to={`/events_festivaux/${this.props.event.id}`}  style={{ textDecoration: 'none' }}>
                    <CardImg width="100%" src={image} alt={this.props.event.name} />
                    <CardBody>
                        <CardTitle tag="h5" ><strong>{this.props.event.name}</strong></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.event.localisation}</CardSubtitle>
                        <CardText className="mb-2 text-muted">{new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(Date.parse(this.props.event.date)))}</CardText>
                    </CardBody>
                </Link>
                <Button color="info" type="button" size="sm" onClick={this.interested}  > {this.state.interested}<i className={this.state.checked}></i></Button>
            </Card>
        );
    }
}

export default EventItem;