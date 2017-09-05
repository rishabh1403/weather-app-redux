import React, { Component } from 'react';

export default class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = { term : '' };
	}
	handleChange(e){
		this.setState({
			term : e.target.value
		})
	}
	handleSubmit(e){
		e.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="input-group">
				<input placeholder="Get Forecast" className="form-control"
					value={this.state.term} 
					onChange={this.handleChange.bind(this)}/>
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">Submit</button>
				</span>
			</form>
		);
	}
}