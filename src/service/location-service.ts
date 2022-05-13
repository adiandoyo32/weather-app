import Location from "../models/Location";

export const getGeoPosition = (lat: number, lng: number) => {
  const apiKey: string = import.meta.env.VITE_APP_WEATHER_API_KEY;
  const q = `${lat},${lng}`;
  return fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${q}&apikey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => data as Location);
};

export const getCityByName = (cityName: string) => {
  const apiKey: string = import.meta.env.VITE_APP_WEATHER_API_KEY;
  const q = cityName
  return fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/search?q=${q}&apikey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => data as Location[]);
};
