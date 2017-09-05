import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
class SearchBar extends Component {

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
		this.props.fetchWeather(this.state.term);
		this.setState({
			term : ''
		})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="input-group">
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);