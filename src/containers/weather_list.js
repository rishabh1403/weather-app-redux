import React, { Component } from 'react';
import { connect } from  'react-redux';
class WeatherList extends Component {

    renderWeather(cityData){
        return this.props.weather.map((cityData,i)=>{
            return (
                <tr key={i}>
                    <td>{cityData.city.name}</td>
                </tr>
            );
        });
        
    }

	render() {
		return (
			<table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderWeather()}
                </tbody>
            </table>
		);
	}
}

function mapPropsToState({weather}){
	return { weather }
}

export default connect(mapPropsToState)(WeatherList);