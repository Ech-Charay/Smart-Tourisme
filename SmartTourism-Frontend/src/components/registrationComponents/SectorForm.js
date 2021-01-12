import React, { Component } from "react";
// reactstrap components
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

class SectorForm extends Component{

	render(){
		return (
			<React.Fragment>
				<InputGroup className="no-border">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<i className="now-ui-icons users_circle-08"></i>
						</InputGroupText>
					</InputGroupAddon>
					<Input
						placeholder="Login..."
						type="text"
						onChange={this.props.handleChange}
					></Input>
				</InputGroup>
				<InputGroup className="no-border">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<i className="now-ui-icons ui-1_lock-circle-open"></i>
						</InputGroupText>
					</InputGroupAddon>
					<Input
						placeholder="Mot de Passe..."
						type="password"
						autoComplete=""
						onChange={this.props.handleChange}
					></Input>
				</InputGroup>
				<InputGroup className="no-border">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<i className="now-ui-icons text_caps-small"></i>
						</InputGroupText>
					</InputGroupAddon>
					<Input
						placeholder="Nom Complet..."
						type="text"
						onChange={this.props.handleChange}
					></Input>
				</InputGroup>
				<InputGroup className="no-border">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<i className="now-ui-icons location_compass-05"></i>
						</InputGroupText>
					</InputGroupAddon>
					<Input
						placeholder="Secteur d'activité..."
						type="text"
						onChange={this.props.handleChange}
					></Input>
				</InputGroup>
				<div className="textarea-container">
	              <Input
	                cols="80"
	                name="description"
	                onChange={this.props.handleChange}
	                placeholder="Description..."
	                rows="100"
	                type="textarea"
	              ></Input>
	            </div>
			</React.Fragment>
		);
	}
	
}

export default SectorForm;