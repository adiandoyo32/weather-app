import ForecastInformation from "../models/ForecastInformation";

export const getForecastLocation = (locationKey: string) => {
  const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
  return fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?details=true&apikey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => data as ForecastInformation);
};
