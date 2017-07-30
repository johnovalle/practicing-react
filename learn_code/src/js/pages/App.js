import React from "react";
import Layout from "./Layout";
import Header from "../components/Header";

export default class App extends React.Component {
    constructor() {
		super();
		this.state = {
			title: "Welcome!"
		};
		this.changeTitle = this.changeTitle.bind(this);
	}
	
	changeTitle(title){
		this.setState({title});
	}
	
	render() {
		return (
			<div>
				<Header changeTitle={this.changeTitle} title={this.state.title}/>
				<Layout/>
			</div>
		);
	}
}
