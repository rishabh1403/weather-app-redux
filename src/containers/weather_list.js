import React, { Component } from 'react';
import { connect } from  'react-redux';
import { fetchWeather } from '../actions/index';
class WeatherList extends Component {

	render() {
		return (
			<table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
		);
	}
}

function mapPropsToState(state){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);