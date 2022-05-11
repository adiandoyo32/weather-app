import React from "react";
import DailyForecast from "../models/DailyForecast";
import WeatherLocation from "../models/WeatherLocation";

interface LocationCardProps {
    location: DailyForecast;
}

export const LocationCard: React.FC<LocationCardProps> = (props) => {
    return (
        <div>
            <div>{props.location.city.name}</div>
            {props.location.list.map((forecast) => {
                return (
                    <div>
                        {/* <div>{forecast.dt_txt}</div> */}
                    </div>
                );
            })}
        </div>
    );
};
