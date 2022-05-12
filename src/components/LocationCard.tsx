import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { WEATHER_IMAGE_URL } from "../constants/constant";
import ForecastInformation from "../models/ForecastInformation";
import Location from "../models/Location";

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
    <div>
      <Box>
        <Box mt="1" fontWeight="bold" lineHeight="tight" isTruncated>
          <Text fontSize="3xl">{props.location.LocalizedName}</Text>
        </Box>
        <Box mt="1" fontWeight="normal" isTruncated>
          <Text fontSize="md" color="gray.500">
            {props.location.AdministrativeArea.LocalizedName}
          </Text>
        </Box>
      </Box>

      {props.forecast ? (
        <Box>
          <Box mt="6" fontWeight="medium" lineHeight="tight">
            <Text fontSize="lg" color="gray.600">
              {props.forecast.Headline.Text}
            </Text>
          </Box>
          <Box mt="6" fontWeight="medium" lineHeight="tight">
            <Text fontSize="lg" color="gray.600">
              Temperature
            </Text>
            <Stack spacing={8} direction="row">
              <Text fontSize="2xl">
                {props.forecast.DailyForecasts[0].Temperature.Minimum.Value}
                {props.forecast.DailyForecasts[0].Temperature.Minimum.Unit}
              </Text>
              <Text fontSize="2xl">
                {props.forecast.DailyForecasts[0].Temperature.Maximum.Value}
                {props.forecast.DailyForecasts[0].Temperature.Maximum.Unit}
              </Text>
            </Stack>
          </Box>
          <Box mt="6" fontWeight="medium" lineHeight="tight">
            <Text fontSize="lg" color="gray.600">
              Day
            </Text>
            <Stack spacing={8} direction="row">
              <Text fontSize="2xl">
                {props.forecast.DailyForecasts[0].Day.IconPhrase}
              </Text>
              <Image
                src={resolveWeatherImage(
                  props.forecast.DailyForecasts[0].Day.Icon
                )}
              />
            </Stack>
            <Text fontSize="lg" color="gray.600">
              Night
            </Text>
            <Stack spacing={8} direction="row">
              <Text fontSize="2xl">
                {props.forecast.DailyForecasts[0].Night.IconPhrase}
              </Text>
              <Image
                src={resolveWeatherImage(
                  props.forecast.DailyForecasts[0].Night.Icon
                )}
              />
            </Stack>
          </Box>
        </Box>
      ) : (
        <div>asdasd</div>
      )}
    </div>
  );
};
