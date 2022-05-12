import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { WEATHER_IMAGE_URL } from "../constants/constant";
import ForecastInformation from "../models/ForecastInformation";
import Location from "../models/Location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";

interface LocationCardProps {
    location: Location;
    forecast: ForecastInformation | null;
}

export const LocationCard: React.FC<LocationCardProps> = (props) => {
    const resolveWeatherImage = (iconType: number) => {
        const icon = iconType.toString().padStart(2, "0");
        return `${WEATHER_IMAGE_URL}/${icon}-s.png`;
    };

    return (
        <Box mt="8" borderWidth="1px" p="8" borderRadius="lg">
            <Box>
                <Box mt="1" fontWeight="bold" lineHeight="tight" isTruncated>
                    <Text fontSize="2xl">{props.location.LocalizedName}</Text>
                </Box>
                <Box fontWeight="normal" isTruncated>
                    <Text fontSize="lg" color="gray.400">
                        {`${props.location.AdministrativeArea.LocalizedName}, ${props.location.Country.LocalizedName}`}
                    </Text>
                </Box>
            </Box>

            {props.forecast ? (
                <Box mt="8">
                    <Text fontSize="md" color="gray.600">
                        {props.forecast.Headline.Text}
                    </Text>
                    <Box mt="8" fontWeight="medium" lineHeight="tight">
                        <Grid templateColumns="repeat(2, 1fr)">
                            <GridItem w="100%">
                                <Box fontWeight="medium" lineHeight="tight">
                                    <Stack alignItems="center" spacing="0">
                                        <Text fontSize="md" color="gray.600">
                                            Day
                                        </Text>
                                        <Text fontSize="xl">{props.forecast.DailyForecasts[0].Day.IconPhrase}</Text>
                                        <Image
                                            width="100%"
                                            boxSize="80px"
                                            objectFit="contain"
                                            src={resolveWeatherImage(props.forecast.DailyForecasts[0].Day.Icon)}
                                        />
                                    </Stack>
                                </Box>
                            </GridItem>
                            <GridItem w="100%">
                                <Box fontWeight="medium" lineHeight="tight">
                                    <Stack alignItems="center" spacing="0">
                                        <Text fontSize="md" color="gray.600">
                                            Night
                                        </Text>
                                        <Text fontSize="xl">{props.forecast.DailyForecasts[0].Night.IconPhrase}</Text>
                                        <Image
                                            width="100%"
                                            boxSize="80px"
                                            objectFit="contain"
                                            src={resolveWeatherImage(props.forecast.DailyForecasts[0].Night.Icon)}
                                        />
                                    </Stack>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box mt="6">
                        <Stack spacing={4} direction="row" justifyItems="center" alignItems="center">
                            <Text fontSize="lg" color="gray.600">
                                <FontAwesomeIcon size="2x" icon={faTemperatureHalf} />
                            </Text>
                            <Stack>
                                <Box fontWeight="bold" lineHeight="tight">
                                    <Text fontSize="xl">
                                        {props.forecast.DailyForecasts[0].Temperature.Minimum.Value}
                                        {props.forecast.DailyForecasts[0].Temperature.Minimum.Unit}
                                    </Text>
                                </Box>
                                <Box fontWeight="bold" lineHeight="tight">
                                    <Text fontSize="xl">
                                        {props.forecast.DailyForecasts[0].Temperature.Maximum.Value}
                                        {props.forecast.DailyForecasts[0].Temperature.Maximum.Unit}
                                    </Text>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            ) : (
                <div>Nothing...</div>
            )}
        </Box>
    );
};
