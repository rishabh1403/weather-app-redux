import axios from 'axios';

let API_KEY = 'd2b7f04c47fccbdd30aa79ac90b68c08';
const Root_Url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${Root_Url}&q=${city},us`;
    const request = axios.get(url);
    return {
        type : FETCH_WEATHER,
        payload : request
    }
}