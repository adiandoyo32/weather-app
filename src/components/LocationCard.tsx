import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ForecastInformation from "../models/ForecastInformation";
import Location from "../models/Location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faSun } from "@fortawesome/free-solid-svg-icons";
import { fToC, resolveWeatherImage } from "../utils/utils";
import { ForecastDayTime } from "./ForecastDayTime";

interface LocationCardProps {
  location: Location;
  forecast: ForecastInformation | null;
}

export const LocationCard: React.FC<LocationCardProps> = (props) => {
  return (
    <Box mt="8" borderWidth="1px" p="8" borderRadius="lg">
      <Stack direction="row" justify="space-between" align="center">
        <Box>
          <Text
            mt="1"
            fontWeight="bold"
            lineHeight="tight"
            isTruncated
            fontSize="2xl"
          >
            {props.location.LocalizedName}
          </Text>
          <Text
            mt="1"
            fontSize="lg"
            color="gray.400"
            lineHeight="tight"
            isTruncated
          >
            {`${props.location.AdministrativeArea.LocalizedName}, ${props.location.Country.LocalizedName}`}
          </Text>
        </Box>
        <Text
          mt="1"
          fontWeight="bold"
          lineHeight="tight"
          isTruncated
          fontSize="3xl"
        >
          {fToC(props.forecast?.DailyForecasts[0].Temperature.Minimum.Value) ??
            "-"}
        </Text>
      </Stack>

      {props.forecast ? (
        <Box mt="8">
          <Text fontSize="lg" fontWeight="semibold">
            {props.forecast.Headline.Text}
          </Text>
          <Box mt="4" fontWeight="medium" lineHeight="tight">
            <ForecastDayTime
              dayTime="Day"
              iconPhrase={props.forecast.DailyForecasts[0].Day.IconPhrase}
              iconType={props.forecast.DailyForecasts[0].Day.Icon}
            />
            <ForecastDayTime
              dayTime="Night"
              iconPhrase={props.forecast.DailyForecasts[0].Night.IconPhrase}
              iconType={props.forecast.DailyForecasts[0].Night.Icon}
            />
          </Box>

          <Box mt="4">
            <Grid templateColumns="repeat(2, 1fr)" gap={16}>
              <GridItem w="100%">
                <Stack direction="row" align="center" justify="space-between">
                  <Stack spacing="0">
                    <Text fontSize="xs" color="gray.400">
                      {
                        props.forecast.DailyForecasts[0].Day.Wind.Direction
                          .Localized
                      }
                    </Text>
                    <Text fontSize="lg">
                      {props.forecast.DailyForecasts[0].Day.Wind.Speed.Value}
                      {props.forecast.DailyForecasts[0].Day.Wind.Speed.Unit}
                    </Text>
                  </Stack>
                  <FontAwesomeIcon size="2x" icon={faWind} />
                </Stack>
              </GridItem>
              <GridItem w="100%">
                <Stack direction="row" align="center" justify="space-between">
                  <Stack spacing="0">
                    <Text fontSize="xs" color="gray.400">
                      Hours of Sun
                    </Text>
                    <Text fontSize="lg">
                      {props.forecast.DailyForecasts[0].HoursOfSun}
                    </Text>
                  </Stack>
                  <FontAwesomeIcon size="2x" icon={faSun} />
                </Stack>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      ) : (
        <div>Nothing...</div>
      )}
    </Box>
  );
};
