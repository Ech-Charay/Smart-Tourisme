import React, { Component } from "react";

class Logout extends Component{
	constructor(props){
		super(props);
		this.props.logout();
	}

	render(){
		return <> </>;
	}
}

export default Logout;