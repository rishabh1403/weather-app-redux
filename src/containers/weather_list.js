import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
class WeatherList extends Component {

    renderWeather(){
        return this.props.weather.map((cityData,i)=>{
            const temps = cityData.list.map(weather => weather.main.temp);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            console.log(pressure);
            const humidity = cityData.list.map(weather => weather.main.humidity);
            return (
                <tr key={i}>
                    <td>{cityData.city.name}</td>
                    <td>
                        
                    </td>
                    <td>
                        <Sparklines height={120} width={180} data={pressure}>
                            <SparklinesLine color="blue" />
                        </Sparklines>
                    </td>
                    <td>
                        <Sparklines height={120} width={180} data={humidity}>
                            <SparklinesLine color="green" />
                        </Sparklines>
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