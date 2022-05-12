import { useEffect, useState } from "react";
import "./App.css";
import { LocationCard } from "./components/LocationCard";
import useGeoLocation from "./hooks/useGeoLocation";
import ForecastInformation from "./models/ForecastInformation";
import Location from "./models/Location";
import { getCityByName, getGeoPosition } from "./service/location-service";
import { getForecastLocation } from "./service/weather-service";
import { Box, Container, Input, InputGroup, InputRightElement, ListItem, UnorderedList } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ForecastCard from "./components/ForecastCard";

function App() {
    const [cityName, setCityName] = useState<string>("");
    const [location, setLocation] = useState<Location | null>(null);
    const [forecastInformation, setForecastInformation] = useState<ForecastInformation | null>(null);
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
                    getForecastLocation(location!.Key).then((res) => setForecastInformation(res));
                }
            });
        }
    };

    useEffect(() => {
        if (geoLocation.coords) {
            // getGeoPosition(
            //   geoLocation.coords.latitude,
            //   geoLocation.coords.longitude
            // ).then((res) => {
            //   setLocation(res);
            // });
        }
    }, [geoLocation]);

    return (
        <div className="App">
            <Container maxW="container.sm">
                <Box mt="10">
                    <InputGroup>
                        <Input
                            type="text"
                            value={cityName}
                            onKeyDown={onSearch}
                            onChange={onCityNameChange}
                            placeholder="Type city name..."
                            size="md"
                            autoComplete="off"
                            name="city-name"
                        />
                        <InputRightElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                    </InputGroup>

                    {/* <Box borderWidth="1px">
                        <UnorderedList>
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                    </Box> */}

                    {location && <LocationCard location={location} forecast={forecastInformation} />}
                    {!location && <div>Not found</div>}
                    <ForecastCard forecast={forecastInformation} />
                </Box>
            </Container>
        </div>
    );
}

export default App;
