import { WEATHER_IMAGE_URL } from "../constants/constant";

export const dateIsoToDate = (dateIso: string): string => {
  if (!dateIso) return "";
  var date = new Date(dateIso);
  return date.toDateString();
};

export const getDayName = (dateIso: string): string => {
  if (!dateIso) return "";
  var date = new Date(dateIso);
  return date.toLocaleDateString("en", { weekday: "long" });
};

export const resolveWeatherImage = (iconType: number) => {
  const icon = iconType.toString().padStart(2, "0");
  return `${WEATHER_IMAGE_URL}/${icon}-s.png`;
};

export const fToC = (fahrenheit?: number) => {
  if (!fahrenheit) return 0;
  var fToCel =  Number((fahrenheit - 32) * 5 / 9).toFixed(1);
  return fToCel + '\xB0C';
}