import React, { Component } from "react";
import { Link } from "react-router-dom";

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'

import {
	Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Container,
  Button,
  Nav,
  NavItem,
  NavLink,
  Row
} from "reactstrap";

import GuideHeader from "components/Headers/GuideHeader";
import CustomCarousel from "components/body/guide/Carousel";
import { Loading } from 'components/LoadingComponent';

class Guide extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedIndex: null,
			selectedCategory: "hotels"
		};

		this.defaultIcon = L.icon({
		    iconUrl: icon,
		    shadowUrl: iconShadow,
		    iconAnchor: [12, 41],
		});

		this.greenIcon = new L.Icon({
		  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
		  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
		  iconSize: [25, 41],
		  iconAnchor: [12, 41],
		  popupAnchor: [1, -34],
		  shadowSize: [41, 41]
		});

		this.selectCategory = this.selectCategory.bind(this);
		this.stars = this.stars.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.getMarkerIcon = this.getMarkerIcon.bind(this);
	}

	componentDidMount(){
		this.props.fetchHotels();
	}

	selectCategory(event){
		let category = event.currentTarget.id;
		if(category !== this.state.selectedCategory){
			if(category === "hotels"){
				if(this.props.hotels.hotels.length === 0)
					this.props.fetchHotels();
			}
			else if(category === "plages"){
				if(this.props.beaches.beaches.length === 0)
					this.props.fetchBeaches();
			}
			else if(category === "parcs"){
				if(this.props.parks.parks.length === 0)
					this.props.fetchParks();
			}
			this.setState({...this.state, selectedCategory: category});
		}
	}

	stars(count){
		let list = [];
		for(let i = 0 ; i < count ; i++)
			list.push(<i className="fa fa-star" key={i}/>)
		return list;
	}

	handleClick(event){
		if(event.currentTarget.id === this.state.selectedIndex)
			this.setState({...this.state, selectedIndex: null});
		else
			this.setState({...this.state, selectedIndex: event.currentTarget.id});

		const element = document.getElementById("map_container");

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? 3 * element.offsetTop : 0
      });
    }, 100);

	}

	getMarkerIcon(index) {
    if(index === this.state.selectedIndex)
      return this.greenIcon;
    return this.defaultIcon;
  }

	render(){
		var data = { isLoading: false,errMess: null, data:[]};
		switch(this.state.selectedCategory){
			case "hotels":
				if(this.props.hotels){
					data.isLoading = this.props.hotels.isLoading;
					data.errMess = this.props.hotels.errMess;
					data.data = this.props.hotels.hotels;
				}
				break;
			case "plages":
				if(this.props.beaches){
					data.isLoading = this.props.beaches.isLoading;
					data.errMess = this.props.beaches.errMess;
					data.data = this.props.beaches.beaches;
				}
				break;
			case "parcs":
				if(this.props.parks){
					data.isLoading = this.props.parks.isLoading;
					data.errMess = this.props.parks.errMess;
					data.data = this.props.parks.parks;
				}
				break;
			default:
				if(this.props.hotels){
					data.isLoading = this.props.hotels.isLoading;
					data.errMess = this.props.hotels.errMess;
					data.data = this.props.hotels.hotels;
				}
				break;
		}
		
		return (
			<>
	      <div className="wrapper">
	        <GuideHeader title="Service Guide" />
	        <div className="main">
	          <Card className="text-center">
			        <CardHeader>
			          <Nav className="justify-content-center" tabs>
			            <NavItem>
			              <NavLink
			              	id="hotels"
			                className="active"
			                onClick={this.selectCategory}
			              >
			              	<i className="fas fa-bed" />
			                {" "}Hôtels
			              </NavLink>
			            </NavItem>
			            <NavItem>
			              <NavLink
			              	id="plages"
			              	className="active"
			              	onClick={this.selectCategory}
			              >
			              	<i className="fas fa-swimmer" />
			                {" "}Plages
			              </NavLink>
			            </NavItem>
			            <NavItem>
			              <NavLink
			              	id="parcs"
			                className="active"
			                onClick={this.selectCategory}
			              >
			              	<i className="fas fa-tree" />
			                {" "}Parcs
			              </NavLink>
			            </NavItem>
			          </Nav>
			        </CardHeader>
			        <CardBody>
			        {
			        	(data.isLoading) ?
					        <div className="container">
					          <div className="row">            
					            <Loading />
					          </div>
					        </div>
					      : (data.errMess) ?
					        <div className="container">
					            <div className="row"> 
					              <div className="col-12">
					                <h4>{data.errMess}</h4>
					              </div>
					            </div>
					        </div>
					      : <>
				          <CardTitle tag="h4">List des {this.state.selectedCategory} d'Al Hoceïma</CardTitle>

				          <Container id="map_container">
					          <MapContainer center={[35.23673457111137, -3.937290290980464]} zoom={13} scrollWheelZoom={false}>
										  <TileLayer
										    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
										    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
										  />
										  {
										  	data.data.map((elem) => {
										  		return(
										  				<Marker position={elem.location} key={elem.id} icon={this.getMarkerIcon(elem.id)} >
														    <Tooltip>
														      {elem.name}
														    </Tooltip>
														  </Marker>
										  			);
										  	})
										  }
										</MapContainer>
									</Container>
									<br/><br/>
									<CardText>
				            Cliquez sur l'hotel que vous aimez pour le localiser sur la map !
				          </CardText>
									<Container>
										<Row>
											{
												data.data.map((elem) => {
													return (
														<div className="col-12 col-md-4" key={elem.id}>
															<Card>
								                <CustomCarousel items={elem.images} />
								                <Link id={elem.id} to="#map_container" onClick={this.handleClick}  style={{ textDecoration: 'none' }}>
								                  <CardBody>
								                      <CardTitle tag="h5" ><strong>{elem.name}</strong></CardTitle>
								                      {this.state.selectedCategory === "hotels" ? <CardSubtitle tag="h6" className="mb-2 text-muted">{this.stars(elem.stars)}</CardSubtitle> : <></>}
								                  </CardBody>
								                </Link>
								                {this.state.selectedCategory === "hotels" ? <Button href={elem.booking} target="_blank">Réserver sur booking</Button> : <></>}
															</Card>
														</div>
													);
												})
											}
										</Row>
									</Container>

									<Button
				            color="primary"
				            href="#pablo"
				            onClick={e => e.preventDefault()}
				          >
				            Go somewhere
				          </Button>

				        </>
				      }
				      </CardBody>
			      </Card>
	        </div>
	      </div>
	    </>
	  );
	}
}

export default Guide;