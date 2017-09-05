import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
class WeatherList extends Component {

    renderWeather(){
        return this.props.weather.map((cityData,i)=>{
            const temps = cityData.list.map(weather => weather.main.temp);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            const humidity = cityData.list.map(weather => weather.main.humidity);
            return (
                <tr key={i}>
                    <td>{cityData.city.name}</td>
                    <td>
                        <Chart data={temps} color='orange' />
                    </td>
                    <td>
                        <Chart data={pressure} color='green' />
                    </td>
                    <td>
                        <Chart data={humidity} color='blue' />
                    </td>
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