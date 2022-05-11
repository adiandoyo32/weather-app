import City from "./City";
import Forecast from "./Forecast";

export default interface DailyForecast {
    city: City;
    cnt: number;
    cod: string;
    list: Forecast[];
}
