let API_KEY = 'd2b7f04c47fccbdd30aa79ac90b68c08';
const Root_Url = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${Root_Url}&q=${city},us`;
    return {
        type : FETCH_WEATHER
    }
}