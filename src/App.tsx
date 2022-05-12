import { useEffect, useState } from "react";
import "./App.css";
import { LocationCard } from "./components/LocationCard";
import useGeoLocation from "./hooks/useGeoLocation";
import DailyForecast from "./models/DailyForecast";
import ForecastInformation from "./models/ForecastInformation";
import Location from "./models/Location";
import WeatherLocation from "./models/WeatherLocation";
import { getCityByName, getGeoPosition } from "./service/location-service";
import { getForecastLocation } from "./service/weather-service";
import {
  Box,
  Center,
  Container,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function App() {
  const [cityName, setCityName] = useState<string>("");
  const [location, setLocation] = useState<Location | null>(null);
  const [forecastInformation, setForecastInformation] =
    useState<ForecastInformation | null>(null);
  const geoLocation = useGeoLocation();

  const onCityNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getCityByName(cityName).then((res) => {
        console.log(res);
        if (res.length > 0) {
          setLocation(() => res[0]);
          console.log(res[0].Key);
          getForecastLocation(location!.Key).then((res) =>
            setForecastInformation(res)
          );
        }
      });
    }
  };

  useEffect(() => {
    if (geoLocation.coords) {
      getGeoPosition(
        geoLocation.coords.latitude,
        geoLocation.coords.longitude
      ).then((res) => {
        setLocation(res);
      });
    }
  }, [geoLocation]);

  return (
    <div className="App">
      <Container>
        <Box maxW="sm">
          <InputGroup>
            <Input
              type="text"
              value={cityName}
              onKeyDown={onSearch}
              onChange={onCityNameChange}
              placeholder="Type city name..."
              size="md"
            />
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
          </InputGroup>

          {location && (
            <LocationCard location={location} forecast={forecastInformation} />
          )}
          {!location && <div>Not found</div>}
        </Box>
      </Container>
    </div>
  );
}

export default App;
