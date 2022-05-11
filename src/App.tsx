import { useState } from "react";
import "./App.css";
import { LocationCard } from "./components/LocationCard";
import DailyForecast from "./models/DailyForecast";
import WeatherLocation from "./models/WeatherLocation";

function App() {
    const [cityName, setCityName] = useState<string>("");
    const [location, setLocation] = useState<DailyForecast | null>(null);

    const onCityNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value);
    };

    const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            getWeather();
        }
    };

    const getWeather = () => {
        const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=2&aqi=no&alerts=no`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // setLocation(data);
            });
    };

    return (
        <div className="App">
            <input type="text" value={cityName} onKeyDown={onSearch} onChange={onCityNameChange} />

            {location && <LocationCard location={location} />}
        </div>
    );
}

export default App;
