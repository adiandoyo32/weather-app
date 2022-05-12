import React from "react";
import ForecastInformation from "../models/ForecastInformation";
import Location from "../models/Location";

interface LocationCardProps {
  location: Location;
  forecast: ForecastInformation | null;
}

export const LocationCard: React.FC<LocationCardProps> = (props) => {
  return (
    <div>
      {props.location.AdministrativeArea.LocalizedName}

      {props.forecast ? (
        <div>{props.forecast.Headline.Text}</div>
      ) : (
        <div>asdasd</div>
      )}
    </div>
  );
};
