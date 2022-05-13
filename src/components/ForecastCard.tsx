import { Box, Text, Image, Stack } from "@chakra-ui/react";
import ForecastInformation from "../models/ForecastInformation";
import {
  dateIsoToDate,
  fToC,
  getDayName,
  resolveWeatherImage,
} from "../utils/utils";
import { ForecastDayTime } from "./ForecastDayTime";

interface ForecastCardProps {
  forecast: ForecastInformation | null;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <>
      {forecast && (
        <Box mt="6" borderWidth="1px" px="8" borderRadius="lg">
          {forecast.DailyForecasts.map((forecast, index) => {
            return (
              <Box key={index} mt={6}>
                <Box>
                  <Text fontSize="2xl" fontWeight="bold">
                    {getDayName(forecast.Date)}
                  </Text>
                  <Box>
                    <Stack direction="row" align="end" justify="space-between">
                      <Text fontSize="lg" color="gray.500" fontWeight="normal">
                        {dateIsoToDate(forecast.Date)}
                      </Text>
                      <Text fontSize="2xl" fontWeight="medium">
                        {fToC(forecast.RealFeelTemperature.Minimum.Value)}
                      </Text>
                    </Stack>
                  </Box>
                </Box>
                <Box mt="2">
                  <ForecastDayTime
                    dayTime="Day"
                    iconPhrase={forecast.Day.IconPhrase}
                    iconType={forecast.Day.Icon}
                  />
                </Box>
                <Box mt="2">
                  <ForecastDayTime
                    dayTime="Night"
                    iconPhrase={forecast.Night.IconPhrase}
                    iconType={forecast.Night.Icon}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default ForecastCard;
