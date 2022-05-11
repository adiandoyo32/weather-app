import Current from "./Current";
import ForecastLocation from "./ForecastLocation";
import Main from "./Main";
import Weather from "./Weather";

export default interface Forecast {
    // clouds: {
    //     all: number;
    // };
    // dt: number;
    // dt_txt: string;
    // main: Main;
    // pop: number;
    // rain: {
    //     "3h": number;
    // };
    // sys: {
    //     pod: string;
    // };
    // visibility: number;
    // weather: Weather[];
    // wind: {
    //     deg: number;
    //     gust: number;
    //     speed: number;
    // };
    current: Current;
    forecast: {
        forecastday: [];
    };
    location: ForecastLocation;
}
