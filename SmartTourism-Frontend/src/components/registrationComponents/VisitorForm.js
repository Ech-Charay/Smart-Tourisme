import React, { Component } from "react";
// reactstrap components
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Label,
  UncontrolledTooltip
} from "reactstrap";
import Datetime from 'react-datetime';

class VisitorForm extends Component{

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
						name="login"
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
						name="password"
						onChange={this.props.handleChange}
					></Input>
				</InputGroup>
				<InputGroup
					className="no-border">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<i className="now-ui-icons text_caps-small"></i>
						</InputGroupText>
					</InputGroupAddon>
					<Input
						placeholder="Nom Complet..."
						type="text"
						name="name"
						onChange={this.props.handleChange}
					></Input>
				</InputGroup>
				<InputGroup
					className="no-border">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<i className="now-ui-icons location_compass-05"></i>
						</InputGroupText>
					</InputGroupAddon>
					<Input
						placeholder="Pays..."
						type="text"
						name="country"
						onChange={this.props.handleChange}
					></Input>
					<Input
						placeholder="Ville..."
						type="text"
						name="city"
						onChange={this.props.handleChange}
					></Input>
				</InputGroup>
				<InputGroup
					className="no-border">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<i className="now-ui-icons location_world"></i>
						</InputGroupText>
					</InputGroupAddon>
					<Input
						id="spokenLanguages"
						placeholder="Langues Parlées..."
						type="text"
						name="languages"
						onChange={this.props.handleChange}
					></Input>
					<UncontrolledTooltip placement="top" target="spokenLanguages" delay={0}>
						Separez les langues par des espaces!
					</UncontrolledTooltip>
				</InputGroup>
				<FormGroup className="no-border">
					<Datetime
						inputProps={{ placeholder: "Date de Naissance..." }}
						timeFormat={false}
						name="birthday"
						onChange={this.props.handleChange}
					/>
				</FormGroup>
				<InputGroup className="no-border sexeInput">
					&nbsp;&nbsp;&nbsp;&nbsp;
					<FormGroup check className="form-check-radio" >
						<Label check>
							<Input
								id="inlineRadio1"
								name="gender"
								type="radio"
								value="Man"
								onChange={this.props.handleChange}
							></Input>
							Homme <span className="form-check-sign"></span>
						</Label>
					</FormGroup>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<FormGroup check className="form-check-radio" >
						<Label check>
							<Input
								id="inlineRadio2"
								name="gender"
								type="radio"
								value="Woman"
								onChange={this.props.handleChange}
							></Input>
							Femme <span className="form-check-sign"></span>
						</Label>
					</FormGroup>
					&nbsp;&nbsp;&nbsp;&nbsp;
				</InputGroup>
			</React.Fragment>
		);
	}
	
}

export default VisitorForm;