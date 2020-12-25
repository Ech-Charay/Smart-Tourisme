import React, { Component } from 'react';
import {
    Button,

    Container,
    Row,
    Col,
} from "reactstrap";
import Footer from './Footer';

class Body extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="section section-team text-center">
                <div className="mb-5 p-4">
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">Service Smart Tourism</h2>
                            <h5 className="description">
                                un service, parmi les micro-services du service Smart Tourism, qui fait la collecte de données et l’analyse prédictive au service de la gestion des flux touristiques. Ce service va nous permettre, par la suite, de développer des solutions en matière de circulation, de stationnement, de sécurisation des plages et des espaces forestiers (via, notamment, à la diffusion d’informations en temps réel). Il va aussi permettre aux différents acteurs dans ce secteur d’avoir un calendrier dynamique des activités et ainsi de bien gérer leurs événements en fonction des variations de l'effectif prédit.
                            </h5>
                        </Col>
                    </Row>


                </div>

                <Container className="mb-5">

                    <h2 className="title">Here is our services</h2>
                    <div className="team mt-5"><br />
                        <Row>
                            <Col md="3">
                                <div className="team-player">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluid img-raised"
                                        src={require("assets/img_accueil/map.png")}
                                    ></img>
                                    <h4 className="title">Guide</h4>
                                    <p className="description">
                                        On vous suit pas à pas dans vos trajets.
                                    </p>
                
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="team-player">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluid img-raised"
                                        src={require("assets/img_accueil/album.png")}
                                    ></img>
                                    <h4 className="title">Album de Souvenir</h4>
                                    <p className="description">
                                        On vous génére un album de souvenir que vous pouvez costumiser comme vous voulez.
                    </p>

                                </div>
                            </Col>
                            <Col md="3">
                                <div className="team-player">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluid img-raised"
                                        src={require("assets/img_accueil/dashboard.png")}
                                    ></img>
                                    <h4 className="title">Dashboard</h4>
                                    <p className="description">
                                        Consultez le dashboard des visites pour en avoir idée sur les effectifs à chaque place en temps réel.
                    </p>

                                </div>
                            </Col>
                            <Col md="3">
                                <div className="team-player">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluid img-raised"
                                        src={require("assets/img_accueil/events.png")}
                                    ></img>
                                    <h4 className="title">Events & Festivals</h4>
                                    <p className="description">
                                        Consultez les événements à venir et marquez votre présence
                    </p>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Body;